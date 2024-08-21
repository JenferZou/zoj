import HomeView from "@/views/HomeView.vue";
import { RouteRecordRaw } from "vue-router";
import accessEnum from "@/access/accessEnum";
import UserLayout from "@/layouts/UserLayout.vue";
import UserLoginView from "@/views/user/UserLoginView.vue";
import UserRegisterView from "@/views/user/UserRegisterView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "用户",
    component: UserLayout,
    children: [
      {
        path: "/user/login",
        name: "用户登录",
        component: UserLoginView,
      },
      {
        path: "/user/register",
        name: "用户注册",
        component: UserRegisterView,
      },
    ],
  },
  {
    path: "/",
    name: "首页",
    component: HomeView,
  },
  {
    path: "/questions",
    name: "浏览题目",
    meta: {
      access: accessEnum.ADMIN,
    },
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/question/QuestionsView.vue"
      ),
  },
  {
    path: "/view/question/:id",
    name: "在线做题",
    props: true,
    meta: {
      access: accessEnum.USER,
      hideInMenu: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/question/ViewQuestionView.vue"
      ),
  },
  {
    path: "/add/question",
    name: "创建题目",
    meta: {
      access: accessEnum.ADMIN,
    },
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/question/AddQuestionView.vue"
      ),
  },
  {
    path: "/update/question",
    name: "更新题目",
    meta: {
      hideInMenu: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/question/AddQuestionView.vue"
      ),
  },
  {
    path: "/manage/question",
    name: "管理题目",
    meta: {
      access: accessEnum.ADMIN,
    },
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/question/ManageQuestionView.vue"
      ),
  },
  {
    path: "/about",
    name: "关于",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
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
