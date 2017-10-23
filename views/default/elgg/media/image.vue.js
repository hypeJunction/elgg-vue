define(function (require) {

    var Vue = require('elgg/Vue');
    var elgg = require('elgg');

    var template = require('text!elgg/media/image.vue.html');

    Vue.component('elgg-media-image', {
        template: template,
        props: {
            metadata: {
                type: Object,
                required: true
            }
        }
    });

});
