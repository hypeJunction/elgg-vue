define(function (require) {

    var Vue = require('elgg/Vue');

    Vue.component('elgg-popup', function (resolve) {
        require(['elgg/popup-async'], resolve);
    });

    Vue.directive('popup', {
        bind: function (el, binding, vnode) {
            var id = binding.arg;
            if (!id) {
                console.error('To bind an element to a popup, you need to pass the reference of the popup component, e.g. v-popup:my-popup');
                return;
            }

            el.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();

                vnode.context.$refs[id].setTarget(el);
                vnode.context.$refs[id].toggle();
            });
        },
    });
});