define(function (require) {

    var Vue = require('elgg/Vue');

    var template = require('text!elgg/entity/tags.vue.html');

    Vue.component('elgg-entity-tags', {
        template: template,
        props: {
            entity: {
                type: Object,
                required: true
            },
        }
    });

});
