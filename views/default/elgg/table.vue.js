define(function (require) {

    var Vue = require('elgg/Vue');

    var template = require('text!elgg/table.vue.html');

    Vue.component('elgg-table', {
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
            selectable: {
                type: Boolean,
                default: false,
            },
            inputName: {
                type: String,
                default: '',
            },
            inputProp: {
                type: String,
                default: ''
            },
            rows: {
                type: Array,
                default: function () {
                    return [];
                }
            },
            columns: {
                type: Array,
                default: function () {
                    return [];
                }
            },
            sort: {
                type: Object
            }
        },
        data: function () {
            return {
                selectedItems: this.selected,
                allToggledOnPage: false,
                sortData: this.sort
            }
        },
        computed: {
            allToggled: function () {
                var self = this;
                var selected = this.rows.filter(function(e) {
                    return e.selected;
                });
                return selected.length === this.rows.length;
            }
        },
        methods: {
            isSelected: function (row) {
                var self = this;
                var index = this.selected.findIndex(function (e) {
                    return self.getValueFromDotNotation(row, self.inputProp) === self.getValueFromDotNotation(e, self.inputProp);
                });

                return index >= 0;
            },
            inputValue: function (row) {
                return this.getValueFromDotNotation(row, this.inputProp);
            },
            rowClass: function (row) {
                var styles = row.class ? [row.class] : [];

                if (this.selectable && this.isSelected(row)) {
                    styles.push('elgg-state-selected');
                }

                return styles;
            },
            toggleSelected: function(row) {
                var self = this;
                var index = this.selected.findIndex(function(e) {
                    return self.getValueFromDotNotation(row, self.inputProp) === self.getValueFromDotNotation(e, self.inputProp);
                });

                if (index >= 0) {
                    Vue.delete(this.selected, index);
                } else {
                    this.selected.push(row);
                }
            },
            toggleAll: function (checked) {
                var self = this;
                if (self.allToggledOnPage) {
                    this.rows.forEach(function (e) {
                        if (!self.isSelected(e)) {
                            self.toggleSelected(e);
                        }
                    });
                } else {
                    this.rows.forEach(function (e) {
                        if (self.isSelected(e)) {
                            self.toggleSelected(e);
                        }
                    });
                }
            },
            getColumnHeading: function(column) {
                if (typeof column.heading === 'undefined' && column.name) {
                    return this.echo('column:' + column.name);
                }
                return column.heading;
            },
            getColumnComponentProps: function(column, row) {
                return {
                    data: row,
                    component: column.component || 'div',
                    props: column.props || {},
                    name: column.name,
                    html: column.html
                }
            },
            sortByColumn: function(column) {
                if (!column.sort) {
                    return;
                }

                var direction = 'asc';
                if (column.sort === this.sortData.key) {
                    direction = this.sortData.direction === 'asc' ? 'desc' : 'asc';
                }

                this.sortData = {
                    key: column.sort,
                    direction: direction
                };

                this.$emit('sort', column.sort, direction);
            },
            getSortClass: function(column) {
                if (!column.sort) {
                    return 'elgg-column-unsortable';
                }

                if (column.sort === this.sortData.key) {
                    return 'elgg-column-sorted';
                } else {
                    return 'elgg-column-sortable';
                }
            },
            getSortIcon: function(column) {
                if (!column.sort) {
                    return;
                }
                if (column.sort === this.sortData.key) {
                    return this.sortData.direction === 'asc' ? 'sort-asc' : 'sort-desc';
                } else {
                    return 'sort';
                }
            }
        },
        watch: {
            selected: function (value) {
                this.selectedItems = value;
                this.$emit('select', this.selectedItems);
            }
        }
    });

});
