import { createWebHistory,createRouter } from "vue-router";

import Home from "./components/Home.vue";
import login from "./components/login.vue";
import signup from "./components/signup.vue";

const routes = [
    {
        path: "/Home",
        name: "Home",
        component: Home
    },
    {
        path: "/login/:stark",
        name: "login/",
        component: login
    },
    {
        path: "/signup/:name",
        name: "signup",
        component: signup
    },
];

const router = createRouter({

    history: createWebHistory(),
    routes,
});

export default router;