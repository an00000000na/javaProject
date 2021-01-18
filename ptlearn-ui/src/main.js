import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue'
import { BTable, BPagination, BFormCheckbox, BForm, BButton, BCard, BImg, BDropdown, BCol, BFormInput } from 'bootstrap-vue'

Vue.component('b-button', BButton)
Vue.component('b-form', BForm)
Vue.component('b-checkbox', BFormCheckbox)
Vue.component('b-pagination', BPagination)
Vue.component('b-table', BTable)
Vue.component('b-card', BCard)
Vue.component('b-image', BImg)
Vue.component('b-dropdown', BDropdown)
Vue.component('b-col', BCol)
Vue.component('b-forminput', BFormInput)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
