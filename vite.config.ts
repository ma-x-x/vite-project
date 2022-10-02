import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { getServiceEnvConfig } from "./.env-config";

import {
	createViteProxy,
	getRootPath,
	getSrcPath,
	setupVitePlugins,
	viteDefine,
} from "./build";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
	const viteEnv = loadEnv(
		configEnv.mode,
		process.cwd()
	) as unknown as ImportMetaEnv;

	const rootPath = getRootPath();
	const srcPath = getSrcPath();

	const isOpenProxy = viteEnv.VITE_HTTP_PROXY === "Y";
	const envConfig = getServiceEnvConfig(viteEnv);

	return {
		base: viteEnv.VITE_BASE_URL,
		resolve: {
			alias: {
				"~": rootPath,
				"@": srcPath,
			},
		},
		define: viteDefine,
		plugins: setupVitePlugins(viteEnv),
		server: {
			host: "0.0.0.0",
			open: true,
			proxy: createViteProxy(isOpenProxy, envConfig),
		},
		optimizeDeps: {
			include: ["echarts"],
		},
		build: {
			reportCompressedSize: false,
			sourcemap: false,
			commonjsOptions: {
				ignoreTryCatch: false,
			},
		},
	};
});
