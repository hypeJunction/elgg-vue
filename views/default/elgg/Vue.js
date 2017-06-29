define(function (require) {

    var elgg = require('elgg');
    var Vue = require('Vue');

    Object.keys(elgg.data.vue.components).forEach(function(name) {
        var module = elgg.data.vue.components[name];
        Vue.component(name, function(resolve) {
            require([module], resolve);
        });
    });

    Vue.config.devtools = elgg.data.vue.devtools;

    return Vue;
});