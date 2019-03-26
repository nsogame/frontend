import Vue from "vue";

// buefy
import Buefy from "buefy";
import "buefy/dist/buefy.css";
Vue.use(Buefy);

// vee-validate
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);

// flash message
import VueFlashMessage from "vue-flash-message";
Vue.use(VueFlashMessage);

import router from "./router";
import store from "./store";

import App from "./App";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
