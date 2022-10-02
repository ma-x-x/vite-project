import type { PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import progress from "vite-plugin-progress";
import html from "./html";
import unplugin from "./unplugin";
import visualizer from "./visualizer";
import compress from "./compress";
import naiveUiPlugin from "./naive-ui-plugin";

/**
 * vite插件
 * @param viteEnv - 环境变量配置
 */
export function setupVitePlugins(
	viteEnv: ImportMetaEnv
): (PluginOption | PluginOption[])[] {
	const plugins = [
		vue(),
		html(viteEnv),
		...unplugin(viteEnv),
		progress(),
		...naiveUiPlugin(),
	];

	if (viteEnv.VITE_VISUALIZER === "Y") {
		plugins.push(visualizer as PluginOption);
	}
	if (viteEnv.VITE_COMPRESS === "Y") {
		plugins.push(compress(viteEnv));
	}

	return plugins;
}
