import useAuthStore from "@/store/auth";
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from "vue-router";
import adminRoutes from "./admin-routes";

const routes: RouteRecordRaw[] = [
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

const router: Router = createRouter({
  history: createWebHashHistory(),
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
