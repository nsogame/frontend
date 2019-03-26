<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-grey">Register</h3>
                    <div class="box">
                        <form>
                            <div class="field">
                                <div class="control">
                                    <input class="input" type="email" placeholder="Email" autofocus="">
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input class="input" type="username" placeholder="Username">
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input class="input" type="password" placeholder="Password">
                                </div>
                            </div>
                            <button class="button is-block is-info is-fullwidth">Login</button>
                        </form>
                    </div>
                    <div class="has-text-grey">
                        <router-link :to="{name: 'login'}">Already have an account?</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
