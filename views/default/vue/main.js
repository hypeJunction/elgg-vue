// This is a webpack root (see webpack config if you are confused)

require('vue-multiselect/dist/vue-multiselect.min.css')

import Vue from 'vue'
import VueMultiselect from 'vue-multiselect'
import AnimatedVue from 'animated-vue'
import Sortable from 'sortablejs'

Vue.component('vue-multiselect', VueMultiselect)
Vue.use(AnimatedVue)

Vue.directive('sortable', {
    inserted: function (el, binding) {
        new Sortable(el, binding.value || {})
    }
})

window.Vue = Vue