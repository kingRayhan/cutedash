import { RouteRecordRaw } from "vue-router";

const adminRoutes: RouteRecordRaw[] = [
  {
    path: "",
    name: "index",
    component: () => import("@/views/Index.vue"),
  },
];

export default adminRoutes;
