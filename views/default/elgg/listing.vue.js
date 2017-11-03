define(function (require) {

    var $ = require('jquery');
    var elgg = require('elgg');
    var Ajax = require('elgg/Ajax');
    var Vue = require('elgg/Vue');
    var helpers = require('elgg/VueHelpers');

    var template = require('text!elgg/listing.vue.html');

    Vue.component('elgg-listing', {
        template: template,
        model: {
            prop: 'selected',
            event: 'select'
        },
        props: {
            selected: {
                type: Array,
                default: function () {
                    return [];
                }
            },
            baseUrl: {
                type: String,
                required: true
            },
            options: {
                type: Object,
                default: function () {
                    return {
                        limit: 10,
                        offset: 0
                    }
                }
            },
            filter: {
                type: Object,
                default: function () {
                    return {
                        metadata: {},
                        query: '',
                        sort: 'time_created::desc'
                    }
                }
            },
            listingType: {
                type: String,
                default: 'list'
            },
            listing: {
                type: Object,
                default: function () {
                    return {
                        list: {}
                    }
                }
            },
            layout: {
                type: Object,
                default: function () {
                    return {
                        search: false
                    }
                }
            },
            pagination: {
                type: Object,
                default: function () {
                    return {
                        display: true,
                        position: 'bottom'
                    }
                }
            },
            noResults: {
                type: String,
                default: ''
            },
            inputName: {
                type: String,
                default: ''
            },
            selectable: {
                type: Boolean,
                default: false
            }
        },
        data: function () {
            return {
                items: [],
                loading: true,
                count: 0,
                limit: this.options.limit || 10,
                offset: this.options.offset || 0,
                currentListingType: this.listingType,
                selectedItems: this.selected,
                listFilter: this.filter,
                isSearchingByText: false,
            }
        },

        mounted: function () {
            this.load();
        },
        methods: {
            load: function () {
                var self = this;

                var data = $.extend({}, self.listFilter, self.options);

                for (name in data.metadata) {
                    if (data.metadata[name] === null) {
                        delete data.metadata[name];
                    }
                }

                $('html,body').animate({
                    scrollTop: self.$el.offsetTop
                }, 200);

                self.loading = true;

                return self.$store.dispatch('getEntities', {
                    baseUrl: self.baseUrl,
                    data: data
                }).then(function (list) {
                    self.items = list.items;
                    self.count = list.count;
                    self.limit = list.limit;
                    self.offset = list.offset;

                    self.loading = false;
                });
            },
            hasPagination: function (position) {
                if (!this.pagination.display) {
                    return false;
                }
                if (this.pagination.position === position) {
                    return true;
                }
                if (this.pagination.position === 'both') {
                    return true;
                }
            },
            initSearch: helpers.debounce(function (value) {
                this.options.offset = 0;
                this.isSearchingByText = true;
                var self = this;
                this.load().then(function() {
                    self.isSearchingByText = false;
                });
                this.$emit('search', this);
            }, 500),
            toggleListType: function (listingType) {
                this.currentListingType = listingType;
                this.$emit('list-type-toggle', this);
            },
            navigate: function (offset) {
                this.offset = offset;
                this.options.offset = offset;
                this.$emit('navigate', this);

                this.load();
            },
            defaultListTypeIcon: function (listingType) {
                switch (listingType) {
                    case 'list' :
                        return 'th-list';

                    case 'gallery' :
                        return 'th-large';

                    case 'table' :
                        return 'table';
                }
            },
            sort: function(key, direction) {
                this.listFilter.sort = key + '::' + direction;
                this.load();
                this.$emit('sorted', key, direction);
            }
        },
        computed: {
            listTypes: function () {
                var types = [];
                for (i in this.listing) {
                    types.push(i);
                }
                return types;
            },
            containerClass: function () {
                var styles = [
                    'elgg-listing-' + this.currentListingType + '-container'
                ];
                if (this.loading) {
                    styles.push('elgg-state-loading');
                }
                return styles;
            },
            listingComponent: function () {
                return 'elgg-listing-' + this.currentListingType;
            },
            listingComponentOptions: function () {
                if (typeof this.listing[this.currentListingType] === 'object') {
                    var options = this.listing[this.currentListingType];
                } else {
                    var options = this.currentListingType.list;
                }

                options.selectable = this.selectable;
                options.inputName = this.inputName;
                if (this.listFilter.sort) {
                    sort = this.listFilter.sort.split('::');
                    options.sort = {
                        key: sort[0],
                        direction: sort[1]
                    }
                } else {
                    options.sort = {
                        key: '',
                        direction: ''
                    }
                }

                return options;
            },
        },
        watch: {
            listingType: function (value) {
                this.currentListingType = value;
            },
            selected: function (value) {
                this.selectedItems = value;
                this.$emit('select', this.selectedItems);
            },
            filter: {
                handler: function(value) {
                    this.listFilter = value;
                },
                deep: true
            },
            listFilter: {
                handler: function() {
                    this.load();
                },
                deep: true
            },
            items: function() {
                this.$bus.$emit('resize');
            }
        }
    });

});
