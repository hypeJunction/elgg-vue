define(function (require) {

    var Vue = require('elgg/Vue');
    var elgg = require('elgg');

    var template = require('text!elgg/component.vue.html');

    Vue.component('elgg-component', {
        template: template,
        props: {
            component: {
                type: String,
                default: 'div'
            },
            data: {
                type: Object,
                default: function () {
                    return {};
                }
            },
            props: {
                type: Object,
                default: function () {
                    return {};
                }
            },
            html: {
                default: ''
            },
        },
        computed: {
            filteredComponent: function() {
                return this.component || 'div';
            },
            filteredProps: function () {
                var props = {};

                var defs = this.props || {};
                for (i in defs) {
                    if (typeof defs[i] === 'function') {
                        props[i] = defs[i].call(this, this.data);
                    } else if (typeof defs[i] === 'string') {
                        props[i] = this.getValueFromDotNotation(this, defs[i]);
                    }
                }

                return props;
            },
            filteredHtml: function () {
                if (!this.html) {
                    return;
                }
                if (typeof this.html === 'function') {
                    return this.html.call(this, this.data);
                }
                return this.html;
            }
        }
    });

});
