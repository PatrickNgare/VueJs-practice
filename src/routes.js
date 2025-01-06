import { createWebHistory,createRouter } from "vue-router";

import Home from "./components/Home.vue";
import login from "./components/login.vue";
import signup from "./components/signup.vue";
import pagenotfound from "./components/pagenotfound.vue";

const routes = [
    {
        path: "/Home",
        name: "Home",
        component: Home
    },
    {
        path: "/:pathMatch(.*)*",
        name: "login/",
        component: login
    },
    {
        path: "/signup/:name",
        name: "signup",
        component: signup
    },

    {
        path: "/pagenotfound/",
        name: "pagenotfound",
        component: pagenotfound
    },
];

const router = createRouter({

    history: createWebHistory(),
    routes,
});

export default router;