<template>
    <main class="main">
        <section class="home-container">
            <h2 class="display">Привет, я Ингольф</h2>
            <p>Digital и Traditional художник, а так же разработчик игр на Unity</p>
            <router-link to="/portfolio" class="button">Портфолио</router-link>
            <div class="home-links links">
                <div class="links-list">
                    <a href="https://derpibooru.org/search?q=artist%3Aingolf+arts" 
                        title="Derpiboru"><img src="..\icons/derpiboru.svg" alt="DeviantArt"></a>
                    <a href="https://www.deviantart.com/ingolfthecapitan" 
                        title="DeviantArt"><img src="..\icons/deviantart.svg" alt="DeviantArt"></a>
                    <a href="https://vk.com/ingolf_arts" 
                        title="VK"><img src="..\icons/vk.svg" alt="VK"></a>
                    <a href="https://www.youtube.com/@ingolfarts7171" 
                        title="YouTube"><img src="..\icons/youtube.svg" alt="YouTube"></a>
                    <a href="https://github.com/ingolfTHEcapitan" 
                        title="GitHub"><img src="..\icons/github.svg" alt="GitHub"></a>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    export default {
        name: 'HomeView',
    }
</script>

<style scoped>
   @import url("../css/links.css");
</style>
