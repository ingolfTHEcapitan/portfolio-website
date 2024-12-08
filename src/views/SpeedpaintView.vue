<template>
    <main class="main">
        <section class="block-container">
            <h2>Flutterbat - MLP Speedpaint</h2>
            <div class="video-container">
                <iframe v-for="(video, index) in videos" :key="index" :src="video.Video" frameborder="0"
                    allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <div>
                <router-link to="/gallery" class="button">Перейти в галерею</router-link>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    name: "SpeedpaintView",
    data() {
        return {
            videos: [],
        };
    },
    async created() {
        try {
            const response = await fetch('http://127.0.0.1:3000/videos');
            this.videos = await response.json(); // Загружаем массив видео
            console.log(this.videos); // Проверяем данные в консоли
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    },
};
</script>

<style scoped>
@import url("../css/speedpaints.css");
</style>