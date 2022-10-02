import { createApp } from "vue";
import App from "./App.vue";
import { setupDirectives } from "./directives";
import { setupRouter } from "./router";
import { setupAssets } from "./plugins";
import { setupStore } from "./store";
import { useMessage } from "naive-ui";

async function setupApp() {
  // import assets: js、css
  setupAssets();
  window.$message = useMessage();

  const app = createApp(App);
  // store plugin: pinia
  setupStore(app);

  // vue custom directives
  setupDirectives(app);

  // vue router
  await setupRouter(app);

  // mount app
  app.mount("#app");
}

setupApp();
