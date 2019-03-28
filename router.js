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
            path: "/about",
            name: "about",
            component: () => import("./views/About"),
        },
        {
            path: "/users/login",
            name: "users/login",
            component: () => import("./views/Login"),
        },
        {
            path: "/users/profile/:id",
            name: "users/profile",
            component: () => import("./views/Profile"),
        },
        {
            path: "/users/register",
            name: "users/register",
            component: () => import("./views/Register"),
        },
        {
            path: "/users/settings",
            name: "users/settings",
            component: () => import("./views/Settings"),
        },
    ],
});
