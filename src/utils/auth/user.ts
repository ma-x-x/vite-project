import { EnumStorageKey } from "@/enum";
import { localStorage } from "../storage";

/** 设置token */
export function setToken(token: string) {
	localStorage.set(EnumStorageKey.token, token);
}

/** 获取token */
export function getToken() {
	return localStorage.get(EnumStorageKey.token) || "";
}

/** 去除token */
export function removeToken() {
	localStorage.remove(EnumStorageKey.token);
}

/** 获取refresh token */
export function getRefreshToken() {
	return localStorage.get(EnumStorageKey["refresh-token"]) || "";
}

/** 设置refresh token */
export function setRefreshToken(token: string) {
	localStorage.set(EnumStorageKey["refresh-token"], token);
}

/** 去除refresh token */
export function removeRefreshToken() {
	localStorage.remove(EnumStorageKey["refresh-token"]);
}

/** 获取用户信息 */
export function getUserInfo() {
	const emptyInfo: Auth.UserInfo = {
		userId: "",
		userName: "",
		userRole: "user",
	};
	const userInfo: Auth.UserInfo =
		localStorage.get(EnumStorageKey["user-info"]) || emptyInfo;
	return userInfo;
}

/** 设置用户信息 */
export function setUserInfo(userInfo: Auth.UserInfo) {
	localStorage.set(EnumStorageKey["user-info"], userInfo);
}

/** 去除用户信息 */
export function removeUserInfo() {
	localStorage.remove(EnumStorageKey["user-info"]);
}

/** 去除用户相关缓存 */
export function clearAuthStorage() {
	removeToken();
	removeRefreshToken();
	removeUserInfo();
}
