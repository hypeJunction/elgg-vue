define(function(require) {

    var Vue = require('elgg/Vue');

    var template = require('text!elgg/input/select.vue.html');

    Vue.component('elgg-input-select', {
        template: template,
        model: {
            prop: 'value',
            event: 'change'
        },
        props: {
            value: {

            },
            options: {
                type: Array,
                required: true
            },
            name: {
                type: String
            },
            color: {
                type: String
            },
            size: {
                type: String
            },
            required: {
                type: Boolean,
                default: false
            },
            id: {
                type: String,
                default: function() {
                    return 'elgg-field-vue' + this._uid;
                }
            },
            label: {
                type: String
            },
            help: {
                type: String
            },
            placeholder: {
                type: String
            }
        },
        data: function() {
            return {
                inputValue: this.value
            }
        },
        computed: {
            filteredOptions: function() {
                var options = this.options;
                options = options.map(function(option) {
                    if (typeof option === 'string') {
                        return {
                            value: option,
                            label: option
                        };
                    }
                    return option;
                });
                if (this.placeholder) {
                    options.unshift({
                        disabled: true,
                        label: this.placeholder,
                        value: undefined
                    });
                }
                return options;
            },
            fieldClass: function() {
                var selectors = [];
                if (this.required) {
                    selectors.push('elgg-field-required');
                    selectors.push('is-required');
                }
                return selectors;
            },
            inputClass: function() {
                var selectors = [];
                if (this.color) {
                    selectors.push('is-' + this.color);
                }
                if (this.size) {
                    selectors.push('is-' + this.size);
                }
                return selectors;
            },
        },
        methods: {
            onChange: function() {
                this.$emit('change', this.inputValue);
            }
        },
        watch: {
            value: function(value) {
                this.inputValue = value;
            }
        }
    });

});
