define(function (require) {

    var Vue = require('elgg/Vue');
    var elgg = require('elgg');

    var template = require('text!elgg/media/player.vue.html');

    Vue.component('elgg-media-player', {
        template: template,
        props: {
            metadata: {
                type: Object,
                required: true
            }
        }
    });

});
