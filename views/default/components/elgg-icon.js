define(function (require) {

    var template = require('text!components/elgg-icon.html');
    return {
        template: template,

        props: {
            name: {required: true},
            extraClass: {default: ''}
        },

        data: function () {
            return {
                iconName: this.name
            };
        },

        computed: {
            iconClass: function () {
                var iconClass = [this.extraClass];
                iconClass.push('elgg-icon', 'fa', 'fa-' + this.iconName);
                return iconClass.join(' ');
            }
        },

        methods: {
            setName: function (newName) {
                this.iconName = newName;
            }
        },

        watch: {
            name: function(changed) {
                this.iconName = changed;
            }
        }
    };
});