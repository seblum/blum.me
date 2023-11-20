import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/NotFound.vue";
import Main from "../views/Main.vue";
// import MLOps from "../views/MLOps.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    meta: {
      title: "Main",
    },
    component: Main,
  },
  {
    path: "/mlops",
    name: "MLOps",
    meta: {
      title: "MLOps Engineering",
    },
    // component: MLOps,
    // # Second possibility to directly route to external URL. Seems slower though.
    beforeEnter() {
      window.location.href = "https://seblum.github.io/mlops-engineering-book/";
    }
  },
  {
    path: "/synology",
    name: "Synology",
    meta: {
      title: "Synology",
    },
    beforeEnter() {
      window.location.href = "https://synology-seblum.de8.quickconnect.to/";
    }
  },
  {
    path: "*",
    name: "NotFound",
    meta: {
      title: "404",
    },
    component: NotFound,
  }
];
const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title =
      "Sebastian Blum";
  }
});

export default router;
