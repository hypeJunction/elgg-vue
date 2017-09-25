define(function(require) {

    var Vue = require('elgg/Vue');

    var template = require('text!output/icon.vue.html');

    Vue.component('elgg-icon', {
        template: template,
        props: {
            dataName: {
                type: String,
                required: true
            },
            dataStyle: {
                type: String
            },
            dataSize: {
                type: String
            },
            dataState: {
                type: String
            }
        },
        data: function () {
            return {
                name: this.dataName,
                style: this.dataStyle,
                size: this.dataSize,
                state: this.dataState
            }
        },
        computed: {
            wrapperClass: function() {
                var styles = [];
                if (this.size) {
                    styles.push('is-' + this.size);
                }
                if (this.style) {
                    styles.push('has-text-' + this.style);
                }
                return styles.join(' ');
            },
            iconClass: function() {
                var styles = [];

                styles.push('fa-' + this.name);

                if (this.state) {
                    styles.push('elgg-icon-' + this.state);
                }

                return styles.join(' ');
            },
        },
        watch: {
            dataName: function(value) {
                this.name = value;
            },
            dataStyle: function(value) {
                this.style = value;
            },
            dataSize: function(value) {
              this.size = value;
            },
            dataState: function(value) {
                this.state = value;
            },
        }
    });

});
