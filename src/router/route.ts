import HomeView from "@/views/HomeView.vue";
import { RouteRecordRaw } from "vue-router";
import accessEnum from "@/access/accessEnum";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "首页",
    component: HomeView,
  },
  {
    path: "/about",
    name: "题目列表",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/admin",
    name: "仅管理员可见",
    meta: {
      access: accessEnum.ADMIN,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AdminView.vue"),
  },
  {
    path: "/noAuth",
    name: "无权限",
    meta: {
      hideInMenu: true,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NoAuthView.vue"),
  },
];
