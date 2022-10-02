/** 设置对象数据 */
export function objectAssign<T extends Record<string, any>>(
	target: T,
	source: Partial<T>
) {
	Object.assign(target, source);
}

// 判断字符串是符合json格式
export const isJsonString = (str: string): boolean => {
	try {
		if (typeof JSON.parse(str) === "object") {
			return true;
		}
	} catch {
		return false;
	}
	return false;
};
