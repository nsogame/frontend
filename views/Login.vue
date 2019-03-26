<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container">
                <div class="column is-6 is-offset-3">
                    <h3 class="title has-text-grey has-text-centered">Login</h3>
                    <p class="subtitle has-text-grey has-text-centered">Please login to proceed.</p>
                    <div class="box">
                        <figure class="avatar has-text-centered">
                            <img src="https://placehold.it/128x128?text=?">
                        </figure>
                        <form v-on:submit.prevent="$validator.validateAll(); login();">
                            <div class="field">
                                <div class="control">
                                    <label class="label">Username or Email</label>
                                    <input name="identifier" class="input is-medium" v-model="identifier" v-validate="'required'" v-bind:class="{'is-danger': errors.has('identifier')}" type="text" placeholder="Username or Email" autocomplete="off" autofocus="">
                                </div>
                                <p class="help is-danger" v-show="errors.has('identifier')">
                                    {{ errors.first('identifier') }}
                                </p>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <label class="label">Password</label>
                                    <input name="password" class="input is-medium" v-model="password" v-validate="'required'" v-bind:class="{'is-danger': errors.has('password')}" type="password" placeholder="Password">
                                </div>
                            </div>
                            <div class="field">
                                <label class="checkbox">
                                    <input type="checkbox"> Remember me
                                </label>
                            </div>
                            <button class="button is-block is-info is-fullwidth" v-bind:disabled="errors.any()">Login</button>
                            <b-loading :is-full-page="false" :active.sync="loading" :can-cancel="false"></b-loading>
                        </form>
                    </div>
                    <div class="has-text-grey has-text-centered">
                        <router-link :to="{name: 'users/register'}">Register</router-link> &middot;
                        <router-link :to="{name: 'index'}">Forgot Password</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { Toast } from "buefy/dist/components/toast";
    import { LOGIN } from "~/store/actions.type";

    export default {
        data() {
            return {
                loading: false,
                identifier: "",
                password: "",
            };
        },
        methods: {
            login() {
                this.loading = true;
                this.$store.dispatch(LOGIN, {
                    identifier: this.identifier,
                    password: this.password,
                }).then(() => {
                    Toast.open("Successfully logged in!");
                    this.$router.push({name: "users/profile"});
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
.box {
    margin-top: 5rem;
}
.avatar {
    margin-top: -70px;
    padding-bottom: 20px;

    img {
        padding: 5px;
        background: #fff;
        border-radius: 50%;
        -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
        box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    }
}
input {
    font-weight: 300;
}
p.subtitle {
    padding-top: 1rem;
}
</style>
