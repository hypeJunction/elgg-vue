define(function (require) {

    var Vue = require('elgg/Vue');
    var template = require('text!elgg/image/block.vue.html');

    Vue.component('elgg-image-block', {
        template: template,
    });

});
