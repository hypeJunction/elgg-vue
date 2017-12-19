define(function (require) {

    var Vue = require('elgg/Vue');
    var ElggInput = require('elgg/input.vue');

    var template = require('text!elgg/input/checkboxes.vue.html');

    Vue.component('elgg-input-checkboxes', {
        template: template,
        extends: ElggInput,
        data: function() {
            return {
                inputValue: typeof this.value === 'undefined' ? [] : this.value
            }
        },
        props: {
            options: {
                type: Array,
                required: true
            },
        },
        computed: {
            filteredOptions: function () {
                var self = this;
                var options = this.options;
                options = options.map(function (option) {
                    if (typeof option === 'string') {
                        return {
                            value: option,
                            label: option
                        };
                    }
                    return option;
                });

                options.forEach(function (option) {
                    var inputValue = self.inputValue || [];
                    option.selected = inputValue.indexOf(option.value) >= 0;
                });

                return options;
            }
        }
    });

});
