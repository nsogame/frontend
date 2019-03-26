import axios from "axios";
import { API_BASE } from "~/config";
import { REGISTER } from "./actions.type";

const state = {
    errors: null,
    user: {},
};

const actions = {
    [REGISTER](context, credentials) {
        return new Promise((resolve, reject) => {
            axios.post(API_BASE + "/users/register", credentials).then(response => {
                console.log(response);
                resolve();
            }).catch(reject);
        });
    },
};

const mutations = {
};

const getters = {
    currentUser(state) {
        return state.user;
    },
    isAuthenticated(state) {
        return false;
    },
};

export default {
    state, actions, mutations, getters,
};
