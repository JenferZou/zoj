import router from "@/router";
import store from "@/store";
import accessEnum from "@/access/accessEnum";
import checkAccess from "@/access/checkAccess";

router.beforeEach(async (to, from, next) => {
  if (to.meta?.access === "canAdmin") {
    if (store.state.user.loginUser?.role !== "admin") {
      next("/noAuth");
      return;
    }
  }
  let loginUser = store.state.user.loginUser;

  if (
    !loginUser ||
    !loginUser.userRole ||
    loginUser.userRole === accessEnum.NOT_LOGIN
  ) {
    await store.dispatch("user/getLoginUser");
    loginUser = store.state.user.loginUser;
  }

  const needAccess = (to.meta?.access as string) ?? accessEnum.NOT_LOGIN;
  if (needAccess !== accessEnum.NOT_LOGIN) {
    if (!loginUser || !loginUser.userRole) {
      next(`/user/login?redirect=${to.fullPath}`);
      return;
    }
    if (!checkAccess(loginUser, needAccess)) {
      next("/noAuth");
      return;
    }
  }

  next();
});
