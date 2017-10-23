define(function (require) {

    var Vue = require('elgg/Vue');
    var template = require('text!elgg/module.vue.html');

    Vue.component('elgg-module', {
        template: template,
        props: {
            type: {
                type: String
            }
        },
        computed: {
            moduleClass: function() {
                if (!this.type) {
                    return;
                }
                return 'elgg-module-' + this.type;
            }
        }
    });

});
