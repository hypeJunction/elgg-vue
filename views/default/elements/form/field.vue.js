define(function (require) {

    var Vue = require('elgg/Vue');
    var template = require('text!elements/form/field.vue.html');

    Vue.component('elgg-field', {
        template: template,
    });

});
