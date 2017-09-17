define(function(require) {

    var Vue = require('elgg/Vue');

    var template = require('text!elgg/progressbar.vue.html');

    Vue.component('elgg-progressbar', {
        template: template,
        props: {
            dataValue: {
                type: Number,
                default: 0
            },
            dataMax: {
                type: Number,
                default: 100
            },
            dataTooltip: {
                type: String,
                default: ''
            },
            dataStyle: {
                type: String,
                default: 'primary'
            },
            dataText: {
                type: String,
                default: 'text'
            }
        },
        data: function () {
            return {
                value: this.dataValue,
                tooltip: this.dataTooltip,
                style: this.dataStyle,
                max: this.dataMax,
            }
        },
        computed: {
            computedClass: function () {
                return 'is-' + this.dataStyle;
            },
            computedText: function () {
                return this.dataText || this.dataValue + '%';
            }
        },
        watch: {
            dataValue: function (value) {
                this.value = value;
            },
            dataTooltip: function (value) {
                this.tooltip = value;
            },
            dataMax: function (value) {
                this.max = value;
            }
        }
    });

});
