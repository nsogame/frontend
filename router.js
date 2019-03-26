import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "index",
            component: () => import("./views/Home"),
        },
        {
            path: "/users/login",
            name: "login",
            component: () => import("./views/Login"),
        },
        {
            path: "/users/register",
            name: "register",
            component: () => import("./views/Register"),
        },
    ],
});
