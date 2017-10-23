define(function(require) {

    var Vue = require('elgg/Vue');

    var template = require('text!elgg/listing/list/object.vue.html');

    Vue.component('elgg-listing-list-object', {
        template: template,
        props: {
            entity: {
                type: Object,
                required: true
            }
        },
        computed: {
            title: function() {
                return this.entity.search.title || this.entity.display_name;
            },
            summary: function() {
                return this.entity.search.description || this.entity.summary;
            }
        }
    });

});
