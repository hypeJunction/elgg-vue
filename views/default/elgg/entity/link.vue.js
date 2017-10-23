define(function (require) {

    var Vue = require('elgg/Vue');

    var template = require('text!elgg/entity/link.vue.html');

    Vue.component('elgg-entity-link', {
        template: template,
        props: {
            entity: {
                type: Object,
                required: true
            },
        },
        computed: {
            title: function () {
                return this.entity.search.title || this.entity.display_name;
            },
        }
    });

});
