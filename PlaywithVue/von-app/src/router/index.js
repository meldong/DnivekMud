import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "bom",
    component: () => import("../components/BomCompare.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/task",
    name: "task",
    component: () => import("../views/TaskView.vue"),
  },
  {
    path: "/bom",
    name: "bom",
    component: () => import("../components/BomCompare.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
