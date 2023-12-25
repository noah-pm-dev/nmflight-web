import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Home from "./pages/Home.vue";
import Portfolio from "./pages/Portfolio.vue"
import Shop from "./pages/Shop.vue"
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
    { path: "/", component: Home },
    { path: "/portfolio", component: Portfolio},
    { path: "/shop", component: Shop}
]

const router = createRouter({ history: createWebHashHistory(), routes });

createApp(App)
    .use(router)
    .mount('#app')
    .$nextTick(() => {
        postMessage({ payload: "removeLoading" }, "*");
    });
