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

<style lang="scss" scoped>
#nav-toggle-state {
  display: none;
}

#nav-toggle-state:checked ~ .navbar-menu {
  display: block;
}
</style>
