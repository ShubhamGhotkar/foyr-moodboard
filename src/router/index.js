import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import TheAbout from "../views/TheAbout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: TheAbout,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
