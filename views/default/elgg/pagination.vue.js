define(function (require) {

    var Vue = require('elgg/Vue');
    var elgg = require('elgg');
    var template = require('text!elgg/pagination.vue.html');

    Vue.component('elgg-pagination', {
        template: template,
        props: {
            count: {
                type: Number,
                required: true,
            },
            limit: {
                type: Number,
                required: true,
            },
            offset: {
                type: Number,
                required: true,
            }
        },
        computed: {
            prevOffset: function() {
                var prevOffset = 0;
                if (this.currentPage > 1) {
                    prevOffset = (this.currentPage - 2) * this.limit;
                    if (prevOffset < 0) {
                        prevOffset = null;
                    }
                }
                return prevOffset;
            },
            nextOffset: function() {
                var nextOffset = this.offset + this.limit;
                if (nextOffset >= this.count) {
                    nextOffset = null;
                }
                return nextOffset;
            },
            startPage: function() {
                return Math.max(Math.min(this.currentPage - 2, this.totalPages - 4), 1);
            },
            totalPages: function() {
                if (this.limit === 0) {
                    return 1;
                }
                return Math.ceil(this.count / this.limit);
            },
            currentPage: function() {
                if (this.limit === 0) {
                    return 1;
                }
                return Math.ceil(this.offset / this.limit) + 1;
            },
            items: function() {
                var items = [];

                if (this.totalPages <= 1) {
                    return items;
                }

                items.push({
                    text: elgg.echo('previous'),
                    offset: this.prevOffset,
                    disabled: !this.prevOffset,
                });

                if (1 < this.tartPage) {
                    items.push(this.getItemParams(1));
                }

                if (1 < (this.startPage - 2)) {
                    items.push({
                        'text': '...',
                        'disabled': true,
                    });
                } else if (this.startPage === 3) {
                    items.push(this.getItemParams(3));
                }

                var max = 1;
                for (i = this.startPage; i <= this.totalPages; i++) {
                    if (max > 5) {
                        break;
                    }
                    items.push(this.getItemParams(i));
                    max++;
                }

                if (this.totalPages > (this.startPage + 6)) {
                    items.push({
                        'text': '...',
                        'disabled': true,
                    });
                } else if (this.startPage + 5 === this.totalPages - 1) {
                    items.push(this.getItemParams(this.totalPages - 1));
                }

                if (this.totalPages >= this.startPage + 5) {
                    items.push(this.getItemParams(this.totalPages));
                }

                items.push({
                    text: elgg.echo('next'),
                    offset: this.nextOffset,
                    disabled: !this.nextOffset,
                });

                return items;
            },
        },
        methods: {
            getItemParams: function(index) {
                return {
                    text: index,
                    offset: (this.limit * index) - this.limit,
                    selected: this.currentPage === index,
                };
            },
            navigate: function(offset) {
                this.$emit('navigate', offset);
            }
        }
    });

});
