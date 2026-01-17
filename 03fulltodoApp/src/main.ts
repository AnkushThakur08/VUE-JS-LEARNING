import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ToastPlugin from "vue-toast-notification";
// 🔥 THIS IS MANDATORY
import "vue-toast-notification/dist/theme-sugar.css";

// createApp(App).mount("#app");
// App.use(ToastPlugin);

const app = createApp(App);

app.use(ToastPlugin);
app.mount("#app");

