import Vue from "vue";
import App from "./App.vue";
import "@/assets/style.scss";
import listMixin from "./mixins/listMixin";
import VueAxios from "@/plugins/axios";

Vue.config.productionTip = false;

// Vue.mixin(listMixin);

Vue.use(VueAxios, {
  baseURL: "https://jsonplaceholder.typicode.com/",
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
