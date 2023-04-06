import HomeView from "@/views/HomeView";
import AboutView from "@/views/AboutView";
import PostView from "@/views/PostView";
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  { path: "/home", name: "home", component: HomeView },
  { path: "/about", name: "about", component: AboutView },
  { path: "/post/:id", name: "post", component: PostView },
];

const router = new VueRouter({
  routes, // сокращённая запись для `routes: routes`
});

export default router;
