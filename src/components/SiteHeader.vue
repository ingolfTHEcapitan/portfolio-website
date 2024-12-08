<template>
     <header class="header">
        <div class="container">
            <div class="logo">
                <img src="..\img\logo.png" alt="Логотип">
                <h1>Ingolf</h1>
            </div>
            <nav class="nav">
                <router-link to="/">Главная</router-link>
                <router-link to="/portfolio">Портфолио</router-link>
                <router-link to="/about">Обо мне</router-link>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        name: "SiteHeader",
    };
</script>

<style scoped>
    @import url("../css/header.css");
    @import url("../css/links.css");
</style>