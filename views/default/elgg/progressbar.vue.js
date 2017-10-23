define(function(require) {

    var Vue = require('elgg/Vue');

    var template = require('text!elgg/progressbar.vue.html');

    Vue.component('elgg-progressbar', {
        template: template,
        props: {
            value: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
                default: 100
            },
            tooltip: {
                type: String,
                default: ''
            },
            color: {
                type: String,
                default: 'primary'
            },
            text: {
                type: String,
                default: 'text'
            }
        },
        computed: {
            progressBarClass: function () {
                return 'is-' + this.color;
            },
            filteredText: function () {
                return this.text || this.value + '%';
            }
        }
    });

});
