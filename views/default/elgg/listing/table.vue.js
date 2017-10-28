define(function (require) {

    var elgg = require('elgg');
    var Ajax = require('elgg/Ajax');
    var Vue = require('elgg/Vue');

    var template = require('text!elgg/listing/table.vue.html');

    Vue.component('elgg-listing-table', {
        template: template,
        model: {
            prop: 'selected',
            event: 'select'
        },
        props: {
            items: {
                type: Array,
                required: true
            },
            options: {
                type: Object,
                default: function () {
                    return {};
                }
            },
            selected: {
                type: Array,
                default: function() {
                    return [];
                }
            }
        },
        data: function() {
            return {
                selectedItems: this.selected,
            }
        },
        methods: {
            sort: function(key, direction) {
                this.$emit('sort', key, direction);
            }
        },
        computed: {
            columns: function() {
                if (this.options.columns) {
                    return this.options.columns;
                }
                return [
                    {
                        component: 'elgg-entity-link',
                        props: {
                            entity: 'data'
                        }
                    },
                ];
            },
            tableClass: function () {
                var classes = [];
                if (typeof this.options.class === 'array') {
                    classes.concat(this.options.class);
                } else if (typeof this.options.class === 'string') {
                    classes.push(this.options.class);
                }
                classes.push('elgg-table-entity');
                return classes.join(' ');
            },
        },
        watch: {
            selected: function(value) {
                this.selectedItems = value;
                this.$emit('select', this.selectedItems);
            }
        }
    });

});
