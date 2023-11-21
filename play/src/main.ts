import { createApp } from "vue";
import { Lazyload, Button, Popup, Form, Field, CellGroup, Dialog } from "vant";
import { setupRouter } from "@/router";

import VuePerfectSignature from "vue-perfect-signature";
import "vue-perfect-signature/lib/style.css";

import App from "./App.vue";
import "@/styles/index.less";

const app = createApp(App);
setupRouter(app);

app.use(Lazyload, { lazyComponent: true });
[Button, Popup, Form, Field, CellGroup, Dialog, VuePerfectSignature.install].forEach((c) => app.use(c));

app.mount("#app");
