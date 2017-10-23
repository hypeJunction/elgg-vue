define(function (require) {

    var Vue = require('elgg/Vue');

    var template = require('text!elgg/entity/imprint.vue.html');

    Vue.component('elgg-entity-imprint', {
        template: template,
        props: {
            entity: {
                type: Object,
                required: true
            }
        }
    });

});
