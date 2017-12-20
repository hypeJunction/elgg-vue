define(function (require) {

    var $ = require('jquery');

    var Vue = require('elgg/Vue');
    var ElggInput = require('elgg/input.vue');

    var template = require('text!elgg/input/slider.vue.html');
    require('moment');

    Vue.component('elgg-input-slider', {
        template: template,
        extends: ElggInput,
        props: {
            options: {
                type: Object,
                default: function () {
                    return {};
                }
            }
        },
        data: function() {
            return {
                fillValue: this.value
            }
        },
        methods: {
            setInputValue: function (event, ui) {
                this.inputValue = ui.value;
            },
            setFillValue: function (event, ui) {
                this.fillValue = ui.value;
            }
        },
        mounted: function () {
            var options = this.options;
            options.value = this.value;
            options.change = this.setInputValue;
            options.slide = this.setFillValue;
            $(this.$refs.slider).slider(options);
        }
    });

});
