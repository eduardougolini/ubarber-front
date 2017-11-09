import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VBtn,
  VIcon,
  VGrid,
  VList,
  VMenu,
  VCard,
  VAvatar,
  VFooter,
  VToolbar,
  VTextField,
  VSubheader,
  VDatePicker,
  VTimePicker,
  VRadioGroup,
  VNavigationDrawer,
  transitions
} from 'vuetify'
// import App from './components/pages/searchPage.vue'
import App from './components/pages/schedulePage.vue'

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VIcon,
    VGrid,
    VList,
    VMenu,
    VCard,
    VAvatar,
    VFooter,
    VToolbar,
    VTextField,
    VSubheader,
    VDatePicker,
    VTimePicker,
    VRadioGroup,
    VNavigationDrawer,
    transitions
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
