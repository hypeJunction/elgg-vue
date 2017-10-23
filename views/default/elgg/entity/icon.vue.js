define(function (require) {

    var Vue = require('elgg/Vue');

    var template = require('text!elgg/entity/icon.vue.html');

    Vue.component('elgg-entity-icon', {
        template: template,
        props: {
            entity: {
                type: Object,
                required: true
            },
            size: {
                type: String,
                default: 'small'
            }
        },
        computed: {
            wrapperClass: function () {
                var selectors = [];
                if (this.entity.type === 'user' || this.entity.type === 'group') {
                    selectors.push('elgg-avatar');
                    selectors.push('elgg-avatar-' + this.size);
                } else {
                    selectors.push('elgg-entity-icon');
                    selectors.push('elgg-entity-icon-' + this.entity.type + '-' + this.entity.subtype);
                }
                return selectors;
            },
            iconUrl: function () {
                return this.entity._links.icons[this.size];
            }
        }
    });

});
