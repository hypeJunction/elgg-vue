define(function (require) {

    var elgg = require('elgg');
    var Ajax = require('elgg/Ajax');
    var Vue = require('elgg/Vue');

    var template = require('text!elgg/listing/gallery.vue.html');

    Vue.component('elgg-listing-gallery', {
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
                default: function() {
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
            itemId: function (item) {
                return 'elgg-' + item.type + '-' + item.guid;
            },
            itemClass: function (item) {
                var styles = [];

                styles.push('elgg-' + item.type + '-' + item.subtype);

                if (this.options.selectable && this.isSelected(item)) {
                    styles.push('elgg-state-selected');
                }

                return styles;
            },
            itemComponent: function (item) {
                if (this.options.item && this.options.item.view) {
                    return this.options.item.view;
                }
                var view = 'elgg-listing-gallery-' + item.type + '-' + item.subtype;
                if (Vue.options.components[view]) {
                    return view;
                }
                return 'elgg-listing-gallery-' + item.type;
            },
            toggleSelected: function(item) {
                var index = this.selected.findIndex(function(e) {
                    return item.guid === e.guid;
                });

                if (index >= 0) {
                    Vue.delete(this.selected, index);
                } else {
                    this.selected.push(item);
                }
            },
            isSelected: function(item) {
                var index = this.selected.findIndex(function(e) {
                    return item.guid === e.guid;
                });

                return index >= 0;
            }
        },
        computed: {
            galleryClass: function () {
                var classes = [];
                if (typeof this.options.class === 'array') {
                    classes.concat(this.options.class);
                } else if (typeof this.options.class === 'string') {
                    classes.push(this.options.class);
                }
                classes.push('elgg-gallery-entity');
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
