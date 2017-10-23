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
        },
        computed: {
            hostname: function() {
                var url = new URL(this.metadata.url);
                return url.hostname;
            },
            excerpt: function() {
                var desc = metadata.description || '';
                return desc.substr(0, 200);
            }
        }
    });

});
