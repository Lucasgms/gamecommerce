import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";
import number from "./utils/number";

Vue.config.productionTip = false;

Vue.filter("number", number);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
