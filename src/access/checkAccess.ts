import store from "@/store";
import AccessEnum from "@/access/accessEnum";

/**
 * 检查当前用户是否具备某权限
 * @param loginUser 当前登录用户
 * @param needAccess 需要的权限
 * @Return boolean 有无劝你西安
 */
const checkAccess = (loginUser: any, needAccess = AccessEnum.NOT_LOGIN) => {
  const loginUserAccess = loginUser?.userRole ?? AccessEnum.NOT_LOGIN;
  if (needAccess === AccessEnum.NOT_LOGIN) {
    return true;
  }
  if (needAccess === AccessEnum.USER) {
    if (loginUserAccess === AccessEnum.NOT_LOGIN) {
      return false;
    }
  }

  if (needAccess === AccessEnum.ADMIN) {
    if (loginUserAccess !== AccessEnum.ADMIN) {
      return false;
    }
  }

  return true;
};

export default checkAccess;
