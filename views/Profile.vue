<template>
    <section class="hero">
        <div class="hero-body">
            <div class="container">
                <div class="columns">
                    <div class="column is-one-quarter">
                        <div class="box left-box">
                            <figure class="avatar has-text-centered">
                                <img src="https://placehold.it/128x128?text=?">
                            </figure>
                            <h1 class="title has-text-centered">{{ currentUser.usernameCase }}</h1>
                            <div class="has-text-centered">
                                <country-flag country="us" size="normal" />
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <b-tabs v-model="activeTab">
                            <b-tab-item v-for="mode in gameModes" :label="mode">
                                <div class="box">
                                    hello
                                </div>
                            </b-tab-item>
                        </b-tabs>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import CountryFlag from "vue-country-flag";
    import { mapGetters } from "vuex";

    export default {
        components: { CountryFlag },
        computed: {
            ...mapGetters(["currentUser", "isAuthenticated"])
        },
        data() {
            return {
                gameModes: ["standard", "taiko", "catch the beat", "mania"],
                activeTab: 0,
            };
        }
    }
</script>

<style lang="scss" scoped>
    .box.left-box {
        margin-top: 3rem;
    }
    .title {
        margin-bottom: 0;
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
</style>
