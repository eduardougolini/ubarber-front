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
  VSelect,
  VToolbar,
  VTextField,
  VSubheader,
  VDatePicker,
  VTimePicker,
  VRadioGroup,
  VNavigationDrawer,
  transitions
} from 'vuetify'
import router from './routes'
import App from './components/navigationDrawer.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);

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
    VSelect,
    VToolbar,
    VTextField,
    VSubheader,
    VDatePicker,
    VTimePicker,
    VRadioGroup,
    VNavigationDrawer,
    transitions
  }
});
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
