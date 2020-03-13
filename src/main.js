import Vue from "vue";
import vuetify from "./plugins/vuetify";
import firebase from "./plugins/firebase";
import "./plugins/vuetify";
import "./plugins/firebase";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
