import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VBtn,
  VIcon,
  VGrid,
  VList,
  VFooter,
  VToolbar,
  VTextField,
  VNavigationDrawer,
  transitions
} from 'vuetify'
import App from './components/pages/search.vue'

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VIcon,
    VGrid,
    VList,
    VFooter,
    VToolbar,
    VTextField,
    VNavigationDrawer,
    transitions
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
