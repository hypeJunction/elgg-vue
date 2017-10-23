define(function(require) {

    var Vue = require('elgg/Vue');

    var template = require('text!elgg/listing/gallery/object.vue.html');

    Vue.component('elgg-listing-gallery-object', {
        template: template,
        props: {
            entity: {
                type: Object,
                required: true
            }
        }
    });

});
