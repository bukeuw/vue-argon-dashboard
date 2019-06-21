import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import ArgonDashboard from "./plugins/argon-dashboard";
import vuexStore from "./store";

Vue.config.productionTip = false;

Vue.use(Vuex);
const store = new Vuex.Store(vuexStore);

Vue.use(ArgonDashboard);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
