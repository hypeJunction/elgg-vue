define(function (require) {

    var $ = require('jquery');

    var Vue = require('elgg/Vue');
    var ElggInput = require('elgg/input.vue');

    var template = require('text!elgg/input/date.vue.html');
    require('moment');

    Vue.component('elgg-input-date', {
        template: template,
        extends: ElggInput,
        props: {
            options: {
                type: Object,
                default: function () {
                    return {};
                }
            },
            isTimestamp: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            setInputValue: function (dateText, instance) {
                if (this.isTimestamp) {
                    var timestamp = Date.UTC(instance.selectedYear, instance.selectedMonth, instance.selectedDay);
                    this.inputValue = timestamp / 1000;
                } else {
                    this.inputValue = dateText;
                }
            }
        },
        mounted: function () {
            var options = this.options;
            options.onSelect = this.setInputValue;
            $(this.$refs.datepicker).datepicker(options);
        }
    });

});
