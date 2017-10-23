define(function (require) {

    var Vue = require('elgg/Vue');
    var Ajax = require('elgg/Ajax');

    var template = require('text!elgg/menu/item.vue.html');

    Vue.component('elgg-menu-item', {
        template: template,
        props: {
            item: {
                type: Object,
                required: true
            },
        },
        computed: {
            itemClass: function () {
                var selectors = [];
                if (this.item.itemClass) {
                    selectors.push(this.item.itemClass);
                }
                if (this.item.selected) {
                    selectors.push('elgg-state-selected');
                }
                return selectors;
            },
        },
        methods: {
            onClick: function() {
                this.item.selected = true;
                this.$emit('selected', this);
            }
        }
    });

});
