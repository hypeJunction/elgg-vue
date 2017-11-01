define(function (require) {

    var Vue = require('elgg/Vue');
    var template = require('text!elgg/field.vue.html');

    Vue.component('elgg-field', {
        template: template,
        props: ['id', 'label', 'help', 'required']
    });

});
