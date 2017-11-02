define(function (require) {

    var Vue = require('elgg/Vue');
    var elgg = require('elgg');

    var template = require('text!elgg/popup.vue.html');

    return {
        name: 'elgg-popup',
        template: template,
        props: {
            options: {
                type: Object,
                default: function () {
                    return {
                        attachment: 'top center',
                        targetAttachment: 'bottom center'
                    }
                }
            }
        },
        data: function () {
            return {
                isOpen: false,
                id: 'elgg-popup-' + this._uid,
                target: null
            }
        },
        methods: {
            show: function () {
                this.isOpen = true;
                this.$emit('open', this);
                this.position();
            },
            hide: function () {
                this.isOpen = false;
                this.$emit('close', this);
            },
            toggle: function () {
                this.isOpen ? this.hide() : this.show();
            },
            setTarget: function(target) {
                this.target = target;
            },
            position: function () {
                var self = this;
                return this.$nextTick(function() {
                    var options = self.options;
                    options.element = self.$refs.popup;
                    options.target = self.target;

                    (new Tether(options));
                    Tether.position();
                })
            }
        },
        watch: {
            hash: function() {
                this.position();
            }
        }
    };

});
