<?php

/**
 * Inline AMD modules that contain vue components
 */

/**
 * Given the view name, returns the AMD name.
 *
 * @param string $name The name of the view (e.g., 'elgg/module.js')
 *
 * @return string The AMD name (e.g., 'elgg/module'), or blank for no AMD name.
 *
 * @author  Steve Clay
 * @package mrclay_combiner
 * @link    https://github.com/mrclay/Elgg-mrclay_combiner/blob/master/classes/MrClay/AmdViewFilter.php
 */
$get_amd_name = function ($name) {
	if (preg_match('~^(js/)?(.*)\\.js\\z~', $name, $m)) {
		return $m[2];
	}
	$pieces = explode("/", $name); // [js, elgg, module.js]
	if (count($pieces) <= 1 || $pieces[0] != 'js') {
		return '';
	}

	array_shift($pieces); // [elgg, module.js]
	$basename = basename(array_pop($pieces), ".js"); // module
	array_push($pieces, $basename); // [elgg, module]

	return implode("/", $pieces); // elgg/module
};

/**
 * Inserts the AMD name into `$content` and returns the new value.
 *
 * @param string $viewName The name of the view.
 * @param string $content  The output of the view to be filtered.
 *
 * @return string The new content with the AMD name inserted, if applicable.
 *
 * @author  Steve Clay
 * @package mrclay_combiner
 * @link    https://github.com/mrclay/Elgg-mrclay_combiner/blob/master/classes/MrClay/AmdViewFilter.php
 */
$filter = function ($viewName, $content) use ($get_amd_name) {
	$amdName = $get_amd_name($viewName);

	if (!empty($amdName)) {
		$content = preg_replace('/^(\s*)define\(([^\'"])/m', "\${1}define(\"$amdName\", \$2", $content, 1);
	}

	return $content;
};

$inline_html = function ($content) {

	$content = preg_replace_callback('/require\(["\']text!(.*)?["\']\);/m', function ($matches) {
		return json_encode(elgg_view($matches[1])) . ';' . PHP_EOL;
	}, $content);

	return $content;
};

$deps = [];

$views = _elgg_services()->views->listViews();
foreach ($views as $view) {
	if (substr($view, -7) != '.vue.js') {
		continue;
	}

	$amd_name = $get_amd_name($view);
	$deps[] = $amd_name;

	//if (elgg_get_config('environment') !== 'development') {
		$content = elgg_view($view);
		$content = $filter($view, $content);
		$content = $inline_html($content);

		echo $content . ";\n";
	//}
}

?>

define('elgg/VueHelpers', ['elgg'], function (elgg) {
    return {
        echo: function (key, argv, language) {
            return elgg.echo(key, argv, language);
        },
        /**
         * https://davidwalsh.name/javascript-debounce-function
         */
        debounce: function (func, wait, immediate) {
            var timeout;
            return function () {
                var context = this, args = arguments;
                var later = function () {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        },
        getValueFromDotNotation: function (object, notation) {
            return notation.split(".").reduce(function (o, x) {
                return o[x]
            }, object);
        }
    }
});

define('elgg/VuePlugin', ['elgg/VueHelpers'], function (VueHelpers) {
    var VuePlugin = {
        install: function (Vue) {
            Vue.mixin({
                methods: VueHelpers
            });
        }
    };

    return VuePlugin;
});

define('elgg/Vue', ['elgg/VuePlugin', 'vue/webpack'], function (VuePlugin) {
    window.Vue.use(VuePlugin);
    return window.Vue;
});

define('elgg/VueComponents', <?= json_encode($deps) ?>, function () {
    // Requires all components, which should call Vue.component()
});

define('elgg/VueDatabase', ['elgg', 'elgg/Ajax', 'elgg/Vue'], function (elgg, Ajax, Vue) {

    var ElggEntity = function (row, context) {
        this.context = context;
        var row = row || {};
        for (i in row) {
            Vue.set(this, i, row[i]);
        }

        var entity = this;
        if (entity.owner_guid && !entity.owner) {
            context.dispatch('getEntity', {
                guid: entity.owner_guid
            }).then(function () {
                entity.set('owner', context.getters.getEntity(entity.owner_guid));
            });
        }

        if (entity.container_guid && !entity.container) {
            context.dispatch('getEntity', {
                guid: entity.container_guid
            }).then(function () {
                entity.set('container', context.getters.getEntity(entity.container_guid));
            })
        }

        context.commit('setEntity', {
            entity: entity
        });
    };

    ElggEntity.prototype = {
        constructor: ElggEntity,
        update: function (row) {
            for (i in row) {
                this.set(i, row[i]);
            }
        },
        set: function (key, value) {
            Vue.set(this, key, value);
        },
        unset: function (key) {
            Vue.delete(this, key)
        },
        getProps: function (clone = true) {
            var props = {};
            for (prop in this) {
                if (typeof this[prop] !== 'function' && prop !== 'prototype' && prop !== 'context') {
                    props[prop] = this[prop];
                }
            }
            return props;
        },
        save: function (action) {
            var action = action || 'action/entity/save';
            var data = this.getProps(false);
            var context = this.context;
            elgg.action(action, {
                data: data
            }).then(function (response) {
                if (response.guid) {
                    context.commit('setEntity', {
                        entity: response
                    });
                }
            })
        }
    }

    var ajax = new Ajax(false);

    var state = {
        entities: [],
        media: [],
    }

    var getters = {
        getEntity: function (store) {
            return function (guid) {
                return store.entities.find(function (e) {
                    return e.guid === guid;
                });
            }
        },
        getMedia: function (store) {
            return function (url) {
                return store.media.find(function (e) {
                    return e.url === url;
                });
            }
        },
    }

    var mutations = {
        setEntity: function (store, payload) {
            var index = store.entities.findIndex(function (e) {
                return e.guid === payload.entity.guid;
            });
            if (index >= 0) {
                for (i in payload.entity) {
                    Vue.set(store.entities[index], i, payload.entity[i]);
                }
            } else {
                store.entities.push(payload.entity);
            }
        },
        removeEntity: function (store, payload) {
            var index = store.entities.findIndex(function (e) {
                return e.guid === payload.guid;
            });

            if (index >= 0) {
                Vue.delete(store.entities, index);
            }
        },
        setMedia: function (store, payload) {
            var index = store.media.findIndex(function (e) {
                return e.url === payload.media.url;
            });
            if (index >= 0) {
                Vue.set(store.media, index, payload.media);
            } else {
                store.media.push(payload.media);
            }
        },
    }

    var requests = [];

    var actions = {
        createEntity: function (context, payload) {
            var entity = new ElggEntity(payload, context);
            return entity;
        },
        getEntity: function (context, payload) {
            var entity = context.getters.getEntity(payload.guid);

            if (entity && !payload.reload) {
                return entity;
            }

            var self = this;

            var request = requests.find(function (e) {
                if (typeof e === 'undefined') {
                    return false;
                }
                return e.baseUrl === 'data/entity' && e.data.guid === payload.guid;
            });

            if (request) {
                return request.promise;
            }

            var promise = new Promise(function (resolve, reject) {
                ajax.path('data/entity', {
                    data: {
                        guid: payload.guid
                    }
                }).done(function (response) {
                    for (i in requests) {
                        if (request === requests[i]) {
                            delete requests[i];
                        }
                    }
                    context.commit('setLoadingState', {
                        loading: false,
                    })
                    if (response.status === 200) {
                        var entity = new ElggEntity(response.payload, context);
                        resolve(entity);
                    } else {
                        reject(response);
                    }
                }).fail(function (response) {
                    context.commit('setLoadingState', {
                        loading: false,
                    })
                    reject(response);
                });
            });

            request = {
                baseUrl: 'data/entity',
                data: {
                    guid: payload.guid
                },
                promise: promise
            }

            requests.push(request);

            return promise;
        },
        getEntities: function (context, payload) {
            var request = requests.find(function (e) {
                if (typeof e !== 'object') {
                    return false;
                }
                return e.baseUrl === payload.baseUrl && e.data.guid === payload.data;
            });

            if (request) {
                return request.promise;
            }

            var promise = new Promise(function (resolve, reject) {
                ajax.path(payload.baseUrl, {
                    data: payload.data,
                    beforeSend: function () {
                        context.commit('setLoadingState', {
                            loading: true,
                        })
                    }
                }).done(function (response) {
                    context.commit('setLoadingState', {
                        loading: false,
                    })
                    if (response.status === 200) {
                        response.payload._related.forEach(function (e) {
                            new ElggEntity(e, context);
                        });

                        var entities = [];
                        response.payload.items.forEach(function (e) {
                            var entity = new ElggEntity(e, context);
                            entities.push(entity);
                        });

                        for (i in requests) {
                            if (request === requests[i]) {
                                delete requests[i];
                            }
                        }

                        response.payload.items = entities;
                        resolve(response.payload);
                    } else {
                        reject(response);
                    }
                }).fail(function (response) {
                    context.commit('setLoadingState', {
                        loading: false,
                    })
                    reject(response);
                });
            });


            request = {
                baseUrl: payload.baseUrl,
                data: payload.data,
                promise: promise
            }

            requests.push(request);

            return promise;
        },
        getMedia: function (context, payload) {
            var media = context.getters.getMedia(payload.url);

            if (media && !payload.reload) {
                return media;
            }

            var self = this;

            var request = requests.find(function (e) {
                if (typeof e === 'undefined') {
                    return false;
                }
                return e.baseUrl === 'data/media/metadata' && e.data.url === payload.url;
            });

            if (request) {
                return request.promise;
            }

            var promise = new Promise(function (resolve, reject) {
                ajax.path('data/media/metadata', {
                    data: {
                        url: payload.url
                    }
                }).done(function (response) {
                    for (i in requests) {
                        if (request === requests[i]) {
                            delete requests[i];
                        }
                    }
                    context.commit('setLoadingState', {
                        loading: false,
                    });
                    if (response.status === 200) {
                        context.commit('setMedia', {
                            media: response.payload
                        });
                        resolve(response.payload);
                    } else {
                        reject(response);
                    }
                }).fail(function (response) {
                    context.commit('setLoadingState', {
                        loading: false,
                    })
                    reject(response);
                });
            });

            request = {
                baseUrl: 'data/media/metadata',
                data: {
                    url: payload.url
                },
                promise: promise
            }

            requests.push(request);

            return promise;
        },
    }

    return {
        getters: getters,
        state: state,
        mutations: mutations,
        actions: actions
    };
});

define('elgg/VuePage', ['elgg', 'elgg/spinner', 'elgg/Vue'], function (elgg, spinner, Vue) {

    var state = {
        loading: false
    }

    var getters = {
        isLoading: function (store) {
            return store.loading;
        }
    }

    var mutations = {
        setLoadingState: function (store, payload) {
            store.loading = payload.loading;
            if (store.loading) {
                spinner.start();
            } else {
                spinner.stop();
            }
        }
    }

    var actions = {}

    return {
        getters: getters,
        state: state,
        mutations: mutations,
        actions: actions
    };
});

define('elgg/VueStorage', ['elgg', 'elgg/VueDatabase', 'elgg/VuePage'], function (elgg, Database, Page) {
    var store = new window.Vuex.Store({
        modules: {
            database: Database,
            page: Page
        }
    });

    return store;
});

require(['elgg/Vue', 'elgg/VueComponents'], function (Vue) {
    Vue.config.devtools = <?= json_encode((elgg_get_config('environment') === 'development')) ?>;
});
