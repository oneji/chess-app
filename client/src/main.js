import Vue from 'vue'
import VeeValidate from 'vee-validate'
import VueMoment from 'vue-moment'
import './plugins/vuetify'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

Vue.use(VeeValidate)
Vue.use(VueMoment)

Vue.config.productionTip = false

// Set the default theme of application
let theme = localStorage.getItem('theme');
if(theme === null) {
  localStorage.setItem('theme', 'dark');
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
