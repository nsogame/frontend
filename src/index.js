import Vue from "vue";

// buefy
import Buefy from "buefy";
import "buefy/dist/buefy.css";
Vue.use(Buefy);

import router from "./router";
import store from "./store";

import App from "./App";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
