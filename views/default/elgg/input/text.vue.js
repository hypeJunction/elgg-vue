define(function(require) {

    var Vue = require('elgg/Vue');
    var ElggInput = require('elgg/input.vue');

    var template = require('text!elgg/input/text.vue.html');

    Vue.component('elgg-input-text', {
        template: template,
        extends: ElggInput,
    });

});
