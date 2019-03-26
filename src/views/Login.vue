<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-grey">Login</h3>
                    <p class="subtitle has-text-grey">Please login to proceed.</p>
                    <div class="box">
                        <figure class="avatar">
                            <img src="https://placehold.it/128x128">
                        </figure>
                        <form>
                            <div class="field">
                                <div class="control">
                                    <input class="input" type="email" placeholder="Email" autofocus="">
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input class="input" type="password" placeholder="Password">
                                </div>
                            </div>
                            <div class="field">
                                <label class="checkbox">
                                    <input type="checkbox"> Remember me
                                </label>
                            </div>
                            <button class="button is-block is-info is-fullwidth">Login</button>
                        </form>
                    </div>
                    <div class="has-text-grey">
                        <router-link :to="{name: 'register'}">Register</router-link> &middot;
                        <router-link :to="{name: 'index'}">Forgot Password</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

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
