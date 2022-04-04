import useAuthStore from "@/store/auth";
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
    meta: { auth: true },
    children: adminRoutes,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  const auth = useAuthStore();

  if (to.meta?.auth && !auth.loggedIn) {
    return next({ name: "auth.login" });
  }

  if (to.meta?.guest && auth.loggedIn) {
    return next({ name: "index" });
  }

  next();
});

export default router;
