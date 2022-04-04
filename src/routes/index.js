import { createRouter, createWebHistory } from "vue-router";
import adminRoutes from "./admin-routes";

const routes = [
  {
    path: "/",
    redirect: "/admin",
  },
  {
    path: "/auth/login",
    name: "auth.login",
    component: () => import("@/views/auth/Login.vue"),
  },
  {
    path: "/admin",
    component: () => import("@/layouts/dashboard/index.vue"),
    children: adminRoutes,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
