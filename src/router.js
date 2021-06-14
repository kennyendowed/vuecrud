import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/pages/home.vue";
import About from "./components/pages/about.vue";
import NotFound from "./components/pages/errors/NotFound.vue";
import Login from "./components/auth/login.vue";
import Register from "./components/auth/register.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { header: "header" }
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: { header: "header" }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { header: "noheader" }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { header: "noheader" }
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
