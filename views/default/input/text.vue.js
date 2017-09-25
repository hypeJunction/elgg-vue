define(function(require) {

    var Vue = require('elgg/Vue');

    var template = require('text!input/text.vue.html');

    Vue.component('elgg-input-text', {
        template: template,
        model: {
            prop: 'data-value',
            event: 'input'
        },
        props: {
            dataValue: {

            },
            dataName: {
                type: String
            },
            dataStyle: {
                type: String
            },
            dataSize: {
                type: String
            },
            dataRequired: {
                type: Boolean,
                default: false
            },
            dataId: {
                type: String
            },
            dataLabel: {
                type: String
            },
            dataHelp: {
                type: String
            },
            dataPlaceholder: {
                type: String
            }
        },
        data: function () {
            return {
                value: this.dataValue || null,
                name: this.dataName,
                id: this.dataId || 'elgg-field-vue' + this._uid,
                style: this.dataStyle,
                size: this.dataSize,
                label: this.dataLabel,
                help: this.dataHelp,
                placeholder: this.dataPlaceholder,
                required: this.dataRequired
            }
        },
        computed: {
            fieldClass: function() {
                var styles = [];
                if (this.required) {
                    styles.push('elgg-field-required');
                    styles.push('is-required');
                }
                return styles.join(' ');
            },
            inputClass: function() {
                var styles = [];
                if (this.style) {
                    styles.push('is-' + this.style);
                }
                if (this.size) {
                    styles.push('is-' + this.size);
                }
                return styles.join(' ');
            },
        },
        methods: {
            onInput: function() {
                this.$emit('input', this.value);
            }
        },
        watch: {
            dataValue: function(value) {
                this.value = value;
            },
            dataName: function(value) {
                this.name = value;
            },
            dataId: function(value) {
                this.id = value;
            },
            dataStyle: function(value) {
                this.style = value;
            },
            dataSize: function(value) {
              this.size = value;
            },
            dataLabel: function(value) {
                this.label = value;
            },
            dataHelp: function(value) {
                this.help = value;
            },
            dataPlaceholder: function(value) {
                this.placeholder = value;
            },
            dataRequired: function(value) {
                this.required = value;
            },
        }
    });

});
