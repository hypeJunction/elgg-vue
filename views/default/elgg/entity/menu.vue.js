define(function (require) {

    var Vue = require('elgg/Vue');
    var Ajax = require('elgg/Ajax');
    var elgg = require('elgg');

    var template = require('text!elgg/entity/menu.vue.html');

    Vue.component('elgg-entity-menu', {
        template: template,
        props: {
            entity: {
                type: Object,
                required: true
            },
        },
        data: function () {
            return {
                isOpen: false,
                isLoaded: false,
                loading: false,
                sections: {},
                inlineStyles: {}
            }
        },
        computed: {},
        methods: {
            close: function() {
                if (this.isOpen) {
                    this.isOpen = false;
                    this.$emit('close', this);
                }
            },
            open: function() {
                this.inlineStyles.right = '0';
                this.inlineStyles.left = 'auto';
                this.inlineStyles.top = (this.$el.offsetTop + this.$el.offsetHeight) + 'px';
                this.inlineStyles.left = (this.$el.offsetLeft) + 'px';

                /** @todo: add collision logic */

                this.isOpen = true;
                this.$emit('open', this);

                if (!this.isLoaded) {
                    this.load();
                }
            },
            toggle: function () {
                this.isOpen ? this.close() : this.open();
            },
            load: function () {
                var self = this;
                var ajax = new Ajax(false);
                ajax.path('data/entity/menu', {
                    data: {
                        guid: self.entity.guid
                    },
                    beforeSend: function () {
                        self.loading = true;
                    }
                }).then(function (response) {
                    if (response.status === 200) {
                        self.sections = response.payload.menu || {
                            default: [
                                {
                                    text: elgg.echo('entity:menu:empty'),
                                    component: 'span'
                                }
                            ]
                        };
                    }
                    self.loading = false;
                    self.isLoaded = true;
                });
            }
        }
    });

});
