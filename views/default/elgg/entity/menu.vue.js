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
                position: {
                    attachment: 'top right',
                    targetAttachment: 'bottom right'
                },
                hash: Math.random()
            }
        },
        methods: {
            rehash: function() {
                this.hash = Math.random();
            },
            close: function () {
                this.isOpen = false;
                this.$emit('close', this);
            },
            open: function () {
                this.isOpen = true;
                if (!this.isLoaded) {
                    this.load();
                }
                this.$emit('open', this);
                this.rehash();
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

                    self.rehash();
                    self.$emit('load', self);
                });
            }
        }
    });

});
