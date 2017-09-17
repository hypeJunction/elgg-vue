define(function(require) {

    var Vue = require('elgg/Vue');

    var template = require('text!elgg/user.vue.html');

    Vue.component('elgg-user', {
        template: template,
        props: {
            dataEntity: {
                required: true
            }
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
