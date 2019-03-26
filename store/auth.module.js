import axios from "axios";
import { API_BASE } from "~/config";
import { LOGIN, LOGOUT, PURGE_AUTH, REGISTER, SET_AUTH } from "./actions.type";

const state = {
    errors: null,
    user: (user => user ? JSON.parse(user) : {})(localStorage.getItem("user")),
    isAuthenticated: !!$cookies.get("session"),
};

const actions = {
    [LOGIN](context, credentials) {
        return new Promise((resolve, reject) => {
            axios.post(API_BASE + "/users/login", credentials).then(response => {
                context.commit(SET_AUTH, response.data);
                resolve();
            }).catch(reject);
        });
    },
    [LOGOUT](context, credentials) {
        context.commit(PURGE_AUTH);
    },
    [REGISTER](context, credentials) {
        return new Promise((resolve, reject) => {
            axios.post(API_BASE + "/users/register", credentials).then(response => {
                context.commit(SET_AUTH, response.data);
                resolve();
            }).catch(reject);
        });
    },
};

const mutations = {
    [PURGE_AUTH](state, user) {
        state.isAuthenticated = false;
        state.user = {};
        $cookies.remove("session");
        localStorage.removeItem("user");
    },
    [SET_AUTH](state, user) {
        state.isAuthenticated = true;
        state.user = user;
        localStorage.setItem("user", JSON.stringify(user));
    }
};

const getters = {
    currentUser(state) {
        return state.user;
    },
    isAuthenticated(state) {
        return state.isAuthenticated;
    },
};

export default {
    state, actions, mutations, getters,
};
