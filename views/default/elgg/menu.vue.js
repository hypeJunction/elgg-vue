define(function (require) {

    var Vue = require('elgg/Vue');
    var Ajax = require('elgg/Ajax');

    var template = require('text!elgg/menu.vue.html');

    Vue.component('elgg-menu', {
        template: template,
        props: {
            name: {
                type: String,
                required: true
            },
            sections: {
                type: Object,
                required: true,
                default: function () {
                    return {};
                }
            },
        },
        computed: {},
        methods: {
            sectionClass: function (section) {
                var selectors = [];

                selectors.push('elgg-menu-' + this.name);
                selectors.push('elgg-menu-' + this.name + '-' + section)

                return selectors;
            }
        }
    });

});
