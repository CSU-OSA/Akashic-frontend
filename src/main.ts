import { createApp } from "vue";
import { createPinia } from "pinia";
import naive from "naive-ui";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import casdoor from "casdoor-vue-sdk";
import App from "./App.vue";
import router from "./router";
import "./style/style.css";
import showdown from "showdown";


const config = {
  serverUrl: "https://auth.dev.magicalsheep.cn",
  clientId: "31552fe8187459739ac9",
  organizationName: "csu-osa",
  appName: "akashic",
  redirectPath: "/#/login/success",
};

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(naive);
app.use(mavonEditor);
app.use(casdoor,config);


app.mount("#app");
