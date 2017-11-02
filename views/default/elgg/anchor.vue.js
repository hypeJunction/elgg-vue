define(function (require) {

    var Vue = require('elgg/Vue');
    var elgg = require('elgg');

    var template = require('text!elgg/anchor.vue.html');

    Vue.component('elgg-anchor', {
        template: template,
        props: {
            text: {
                type: String
            },
            href: {
                type: String,
            },
            title: {
                type: String
            },
            confirm: {},
            rel: {},
            isAction: {
                type: Boolean
            },
            isTrusted: {
                type: Boolean,
                default: false
            },
            excerptLength: {
                type: Number,
                default: 100
            },
            icon: {
                type: String
            },
            badge: {
                type: String
            }
        },
        computed: {
            filteredHref: function () {
                if (!this.href) {
                    return;
                }
                var href = this.href;
                href = elgg.normalize_url(href);
                if (this.isAction) {
                    href = elgg.security.addToken(href);
                }
                return href;
            },
            filteredRel: function () {
                if (this.rel) {
                    return rel;
                }
                if (this.isTrusted) {
                    return;
                }
                if (this.href && this.href.startsWith(elgg.get_site_url())) {
                    return;
                }
                return 'nofollow';
            },
            filteredText: function () {
                var text = this.text || this.href;
                if (!text) {
                    return;
                }
                if (text.length > 100) {
                    return text.substring(1, 100) + '...';
                }
                return text;
            },
            filteredTitle: function () {
                var title = this.title || this.text;
                return title;
            }
        },
        methods: {
            onClick: function (event) {
                var confirmation = this.confirm;
                if (confirmation === true) {
                    confirmation = this.echo('question:areyousure');
                }

                if (confirmation && !confirm(confirmation)) {
                    event.preventDefault();
                    event.stopPropagation();
                    return;
                }

                this.$emit('click', event);
            }
        }
    });

});
