<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <router-link class="navbar-item" :to="{name: 'index'}">
                    &iexcl;nso
                </router-link>

                <label class="navbar-burger burger" for="nav-toggle-state">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <input type="checkbox" id="nav-toggle-state" />

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <router-link class="navbar-item" :to="{name: 'about'}">About</router-link>
                </div>
                <div class="navbar-end" v-if="isAuthenticated">
                    <router-link class="navbar-item" :to="{name: 'users/profile', params: {id: currentUser.id}}"><b>{{ currentUser.usernameCase }}</b></router-link>
                    <router-link class="navbar-item" :to="{name: 'users/settings'}">Settings</router-link>
                    <a class="navbar-item" v-on:click="logout">Logout</a>
                </div>
                <div class="navbar-end" v-if="!isAuthenticated">
                    <router-link class="navbar-item" :to="{name: 'users/login'}">Login</router-link>
                    <router-link class="navbar-item" :to="{name: 'users/register'}">Register</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import { mapGetters } from "vuex";
    import { Toast } from "buefy/dist/components/toast";
    import { LOGOUT } from "~/store/actions.type";

    export default {
        computed: {
            ...mapGetters(["currentUser", "isAuthenticated"])
        },
        methods: {
            logout() {
                this.$store.dispatch(LOGOUT).then(() => {
                    Toast.open("Successfully logged out!");
                    this.$router.push({name: "index"});
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
#nav-toggle-state {
    display: none;
}

#nav-toggle-state:checked ~ .navbar-menu {
    display: block;
}
</style>
