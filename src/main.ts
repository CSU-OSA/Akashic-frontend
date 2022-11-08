import { createApp } from "vue";
import { createPinia } from "pinia";
import naive from "naive-ui";
import casdoor from "casdoor-vue-sdk";

import App from "./App.vue";
import router from "./router";

import "./style/style.css";

const config = {
  serverUrl: "https://auth.dev.magicalsheep.cn",
  clientId: "e653e70adca839906ae3",
  organizationName: "csu-osa",
  appName: "akashic",
  redirectPath: "/callback",
};

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(naive);
app.use(casdoor,config);

app.mount("#app");
