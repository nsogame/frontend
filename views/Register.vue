<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container">
                <div class="column is-6 is-offset-3">
                    <h3 class="title has-text-grey has-text-centered">Register</h3>
                    <div class="box">
                        <form v-on:submit.prevent="$validator.validateAll(); register();">
                            <div class="field">
                                <label class="label">Email</label>
                                <div class="control">
                                    <input name="email" class="input is-medium" v-model="email" v-validate="'required|email'" v-bind:class="{'is-danger': errors.has('email')}" type="email" autocomplete="off" placeholder="Email" autofocus="">
                                </div>
                                <p class="help is-danger" v-show="errors.has('email')">
                                    {{ errors.first('email') }}
                                </p>
                            </div>
                            <div class="field">
                                <label class="label">Username</label>
                                <div class="control">
                                    <input name="username" class="input is-medium" v-model="username" v-validate="'required|min:4'" v-bind:class="{'is-danger': errors.has('username')}" type="username" autocomplete="off" placeholder="Username">
                                </div>
                                <p class="help is-danger" v-show="errors.has('username')">
                                    {{ errors.first('username') }}
                                </p>
                            </div>
                            <div class="field">
                                <label class="label">Password</label>
                                <div class="control">
                                    <input name="password" class="input is-medium" v-model="password" v-validate="'required|min:6'" v-bind:class="{'is-danger': errors.has('password')}" type="password" placeholder="Password">
                                </div>
                                <p class="help is-danger" v-show="errors.has('password')">
                                    {{ errors.first('password') }}
                                </p>
                            </div>
                            <div class="field">
                                <label class="label">Captcha</label>
                                <div class="has-text-centered">
                                    <img v-bind:src="imageData" />
                                </div>
                                <div class="control">
                                    <input name="captcha" class="input" v-model="captcha" v-validate="'required'" v-bind:class="{'is-danger': errors.has('captcha')}" type="text" autocomplete="off" placeholder="Captcha">
                                </div>
                                <p class="help is-danger" v-show="errors.has('captcha')">
                                    {{ errors.first('captcha') }}
                                </p>
                            </div>
                            <button class="button is-block is-info is-fullwidth" v-bind:disabled="errors.any()">Register</button>
                            <b-loading :is-full-page="false" :active.sync="loading" :can-cancel="false"></b-loading>
                        </form>
                    </div>
                    <div class="has-text-grey has-text-centered">
                        <router-link :to="{name: 'users/login'}">Already have an account?</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from "axios";
    import { Toast } from "buefy/dist/components/toast";
    import { API_BASE } from "~/config";
    import { REGISTER } from "~/store/actions.type";

    export default {
        mounted() {
            this.loadCaptcha();
        },
        data() {
            return {
                loading: false,
                imageData: "",
                email: "",
                username: "",
                password: "",
                captcha: "",
            };
        },
        methods: {
            loadCaptcha() {
                axios.get(API_BASE + "/users/register/captcha", {
                    responseType: "arraybuffer",
                }).then(response => {
                    let data = new Buffer(response.data, "binary").toString("base64");
                    this.imageData = `data:image/png;base64,${data}`;
                });
            },
            register() {
                this.loading = true;
                this.$store.dispatch(REGISTER, {
                    email: this.email,
                    username: this.username,
                    password: this.password,
                    captcha: this.captcha
                }).then(() => {
                    this.$router.push({name: "users/login"});
                }).catch(err => {
                    this.loading = false;
                    this.loadCaptcha();
                    this.captcha = "";
                    Toast.open("Something went wrong: " + err.message);
                });
            },
        },
    };
</script>
