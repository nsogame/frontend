<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <router-link class="navbar-item" :to="{name: 'index'}">
                    &iexcl;nso
                </router-link>
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <router-link class="navbar-item" :to="{name: 'index'}">Home</router-link>
                </div>
                <div class="navbar-end">
                    <router-link class="navbar-item" :to="{name: 'login'}">Login</router-link>
                    <router-link class="navbar-item" :to="{name: 'register'}">Register</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>
