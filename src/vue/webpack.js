import Vue from 'vue';
import Vuex from 'vuex';
import Tether from 'tether'
import Tooltip from 'tether-tooltip'

import VueCarousel from 'vue-carousel'
import AnimatedVue from 'animated-vue';
import Sortable from 'sortablejs';

Vue.use(Vuex);
Vue.use(AnimatedVue);
Vue.use(VueCarousel);

Vue.directive('sortable', {
    inserted: function (el, binding) {
        new Sortable(el, binding.value || {})
    }
});

// https://jsfiddle.net/70vm3jrd/1/
Vue.directive('click-outside', {
    bind: function (el, binding, vnode) {
        el.event = function (event) {
            if (!(el === event.target || el.contains(event.target))) {
                vnode.context[binding.expression](event);
            }
        };
        document.body.addEventListener('click', el.event)
    },
    unbind: function (el) {
        document.body.removeEventListener('click', el.event)
    },
});

window.Vue = Vue;
window.Vuex = Vuex;
window.Tether = Tether;
window.Tooltip = Tooltip;