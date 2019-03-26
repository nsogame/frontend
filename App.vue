<template>
    <div>
        <Navbar></Navbar>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    import Navbar from "./components/Navbar";
    import Footer from "./components/Footer";
    export default {
        components: { Navbar, Footer },
    }
</script>

<style lang="scss" scoped>
</style>
