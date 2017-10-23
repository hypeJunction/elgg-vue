define(function (require) {

    var Vue = require('elgg/Vue');
    var helpers = require('elgg/VueHelpers');

    var template = require('text!elgg/media.vue.html');

    Vue.component('elgg-media', {
        template: template,
        props: {
            display: {
                type: String,
                required: true
            },
            src: {
                type: String,
                required: true
            }
        },
        data: function () {
            return {
                metadata: null,
            }
        },
        computed: {
            component: function () {
                return 'elgg-media-' + this.display;
            },
            props: function () {
                return {
                    metadata: function (data) {
                        return data;
                    }
                };
            }
        },
        methods: {
            load: function () {
                var self = this;
                self.metadata = null;
                self.$store.dispatch('getMedia', {
                    url: self.src
                }).then(function (metadata) {
                    self.metadata = metadata;
                });
            },
        },
        mounted: function () {
            this.load();
        },
        watch: {
            src: function () {
                return this.load();
            }
        }
    });

});
