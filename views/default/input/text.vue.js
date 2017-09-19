define(function(require) {

    var Vue = require('elgg/Vue');

    var template = require('text!input/text.vue.html');

    Vue.component('elgg-user', {
        template: template,
        props: {

            dataName: {

            },
            dataValue: {

            },
            data
        },
        data: function () {
            return {
                entity: this.dataEntity
            }
        },
        computed: {

        },
        methods: {

        },
        watch: {
            dataEntity: function(value) {
                this.entity = entity;
            },
        }
    });

});
