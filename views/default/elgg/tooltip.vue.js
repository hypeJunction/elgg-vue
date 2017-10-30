define(function (require) {

    var Vue = require('elgg/Vue');

    Vue.directive('tooltip', {
        params: [
            'tooltip-position',
            'tooltip-theme',
        ],
        bind: function (el, binding, vnode) {
            var ref = binding.arg;

            this.Vue.nextTick(function() {
                new Tooltip({
                    target: el,
                    position: binding.value.position || 'top center',
                    content: ref ? vnode.context.$refs[ref].innerHTML : binding.value.content,
                    classes: binding.value.theme || 'tooltip-theme-dark',
                });
            });
        },
    });
});