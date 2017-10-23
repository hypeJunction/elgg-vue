define(function(require) {

    var Vue = require('elgg/Vue');

    var template = require('text!elgg/input/text.vue.html');

    Vue.component('elgg-input-text', {
        template: template,
        model: {
            prop: 'value',
            event: 'input'
        },
        props: {
            value: {

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
            },
            leftIcon: {
                type: String
            },
            rightIcon: {
                type: String
            },
            loading: {
                type: Boolean,
                default: false
            }
        },
        data: function() {
            return {
                inputValue: this.value
            }
        },
        computed: {
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
            controlClass: function() {
                var selectors = [];
                if (this.leftIcon) {
                    selectors.push('has-icons-left');
                }
                if (this.rightIcon) {
                    selectors.push('has-icons-right');
                }
                if (this.size) {
                    selectors.push('is-' + this.size);
                }
                if (this.loading) {
                    selectors.push('is-loading');
                }
                return selectors;
            }
        },
        methods: {
            onInput: function() {
                this.$emit('input', this.inputValue);
            }
        },
        watch: {
            value: function(value) {
                this.inputValue = value;
            }
        }
    });

});
