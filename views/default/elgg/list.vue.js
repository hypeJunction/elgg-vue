define(function (require) {

    var elgg = require('elgg');
    var Ajax = require('elgg/Ajax');
    var Vue = require('elgg/Vue');
    var template = require('text!elgg/list.vue.html');

    Vue.component('elgg-list', {
        template: template,
        props: {
            dataSource: {
                type: String,
                required: true
            },
            dataPagination: {
                type: Boolean,
                default: true
            },
            dataItemView: {
                type: String
            },
            dataLimit: {
                type: Number,
                default: 10
            },
            dataOffset: {
                type: Number,
                default: 0
            },
            dataNoResults: {
                type: String,
                default: ''
            }
        },
        data: function () {
            return {
                loading: true,
                source: this.dataSource,
                pagination: this.dataPagination,
                itemView: this.dataItemView,
                items: [],
                count: 0,
                limit: this.dataLimit,
                offset: this.dataOffset,
                noResultsText: this.dataNoResults
            }
        },
        mounted: function () {
            this.loadItems();
        },
        methods: {
            loadItems: function () {
                var self = this;
                self.loading = true;
                var ajax = new Ajax(false);
                ajax.path(self.source, {
                    data: {
                        limit: self.limit,
                        offset: self.offset
                    }
                }).then(function (response) {
                    if (response.status === 200) {
                        self.items = response.result.items;
                        self.count = response.result.count;
                        self.limit = response.result.limit;
                        self.offset = response.result.offset;
                    }
                }).done(function () {
                    self.loading = false;
                });
            },
            getListClass: function () {
                return 'elgg-list-entity';
            },
            getItemId: function (item) {
                return 'elgg-' + item.type + '-' + item.guid;
            },
            getItemClass: function (item) {
                return 'elgg-' + item.type + '-' + item.subtype;
            },
            getItemView: function (item) {
                if (this.itemView) {
                    return this.itemView;
                }
                var view = 'elgg-' + item.type + '-' + item.subtype;
                if (Vue.options.components[view]) {
                    return view;
                }
                return 'elgg-' + item.type;
            }
        },
        computed: {},
        watch: {
            dataSource: function (value) {
                this.source = value;
                this.loadItems();
            },
            dataPagination: function (value) {
                this.pagination = value;
            },
            dataItemView: function (value) {
                this.itemView = value;
            },
            dataLimit: function (value) {
                this.limit = value;
                this.loadItems();
            },
            dataOffset: function (value) {
                this.offset = value;
                this.loadItems();
            },
            dataNoResults: function (value) {
                this.noResutsText = value;
            },
        }
    });

});
