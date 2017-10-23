define(function (require) {

    var Vue = require('elgg/Vue');

    Vue.component('vue-multiselect', function (resolve) {
        require(['vue/vendors/Multiselect'], resolve);
    });
});