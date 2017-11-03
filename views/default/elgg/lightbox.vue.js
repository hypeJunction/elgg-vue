define(function (require) {

    var Vue = require('elgg/Vue');
    var elgg = require('elgg');
    var lightbox = require('elgg/lightbox');
    var $ = require('jquery');

    var template = require('text!elgg/lightbox.vue.html');

    Vue.component('elgg-lightbox', {
        template: template,
        props: {
            open: {
                type: Boolean,
                default: false
            },
            options: {
                type: Object,
                default: function () {
                    return {};
                }
            },
            contentClass: {}
        },
        data: function () {
            return {
                isOpen: false,
                lightboxOptions: this.options,
                id: 'elgg-lightbox-' + this._uid,
            }
        },
        methods: {
            setOption: function (name, value) {
                this.lightboxOptions[name] = value;
            },
            show: function () {
                var self = this;
                var opts = $.extend({}, this.lightboxOptions, {
                    onOpen: function () {
                        self.$emit('open', self);
                        this.isOpen = true;
                        self.resize();
                    },
                    onLoad: function () {
                        self.$emit('load', self);
                    },
                    onComplete: function () {
                        self.$emit('complete', self);
                        self.resize();
                    },
                    onCleanup: function () {
                        self.$emit('cleanup', self);
                    },
                    onClosed: function () {
                        self.$emit('close', self);
                        self.isOpen = false;
                    }
                });

                if (!opts.href) {
                    opts.href = $(this.$refs.lightbox);
                    opts.inline = true;
                }

                lightbox.open(opts)
            },
            hide: function () {
                lightbox.close();
            },
            resize: function () {
                this.$nextTick(function () {
                    lightbox.resize();
                });
            }
        },
        mounted: function () {
            this.isOpen = this.open;
            var self = this;
            this.$bus.$on('resize', function () {
                self.resize();
            });
        },
        watch: {
            open: function (value) {
                this.isOpen = value;
                value ? this.show() : this.hide()
            },
            options: {
                handler: function (value) {
                    this.lightboxOptions = value;
                },
                deep: true
            }
        },
    });

    Vue.directive('lightbox', {
        bind: function (el, binding, vnode) {
            var id = binding.arg;
            if (!id) {
                console.error('To bind an element to a lightbox, you need to pass the reference of the lightbox component, e.g. v-lightbox:my-modal');
                return;
            }

            el.addEventListener('click', function (e) {
                e.preventDefault();
                if (vnode.data.attrs) {
                    for (attr in vnode.data.attrs) {
                        vnode.context.$refs[id].setOption(attr, vnode.data.attrs[attr]);
                    }
                }
                vnode.context.$refs[id].show();
            });
        },
    });

});
