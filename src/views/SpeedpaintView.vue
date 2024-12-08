<template>
    <main class="main">
        <section class="block-container">
            <h2>Flutterbat - MLP Speedpaint</h2>
            <div class="video-container">
                <iframe 
                    src="https://www.youtube.com/embed/P8rog1YBEe4"
                    frameborder="0" 
                    allowfullscreen 
                    title="Speedpaint Video">
                </iframe>
            </div>
            <div>
                <router-link to="/gallery" class="button">Перейти в галерею</router-link>
            </div>
        </section>
    </main>
</template>

<script>
   export default {
       name:"SpeedpaintView",
   };
</script>

<style scoped>
   @import url("../css/speedpaints.css");
</style>