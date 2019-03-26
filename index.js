import Vue from "vue";

import axios from "axios";
axios.defaults.withCredentials = true;

// buefy
import Buefy from "buefy";
import "buefy/dist/buefy.css";
Vue.use(Buefy);

// cookies
import VueCookies from "vue-cookies";
Vue.use(VueCookies);

// vee-validate
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);

import router from "./router";
import store from "./store";

import App from "./App";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
