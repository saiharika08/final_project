import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/reg.vue";
import Login from "../views/log.vue";
import Dashboard from "../components/Dashboard.vue";
import AdminDashboard from "../components/AdminDashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/reg",
    name: "Register",
    component: Register
  },
  {
    path: "/log",
    name: "Login",
    component: Login
  },
  {
    path: "/Dash",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/Admin",
    name: "AdminDashboard",
    component: AdminDashboard
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
