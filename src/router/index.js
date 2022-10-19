import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../components/Layout/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Layout,
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("../components/Home.vue"),
      },
      {
        path: "/profile",
        name: "Profile",
        component: () => import("../components/Profile.vue"),
      },
      {
        path: "/categories",
        name: "Categories",
        component: () => import("../components/Categories.vue"),
      },
      {
        path: "/product/:id",
        name: "Product",
        component: () => import("../components/Product.vue"),
      },
      {
        path: "/poc",
        name: "poc",
        component: () => import("../ui/pages/POC.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
