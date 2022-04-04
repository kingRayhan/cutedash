import { createApp } from "vue";
import App from "@/App.vue";
import "@/assets/app.scss";
import naive from "naive-ui";
import { createPinia } from "pinia";
import router from "@/routes";
import { VueQueryPlugin } from "vue-query";
import useAuthStore from "./store/auth";

const meta = document.createElement("meta");
meta.name = "naive-ui-style";
document.head.appendChild(meta);

const app = createApp(App);
app.use(naive);

const pania = createPinia();
app.use(pania);

app.use(VueQueryPlugin);

const auth = useAuthStore();
auth.boot().then(() => {
  app.use(router);
  app.mount("#app");
});
