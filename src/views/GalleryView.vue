<template>
    <main class="main">
        <section class="block-container">
            <h2>2023</h2>
            <div class="gallery-grid">
                <img v-for="(image, index) in galleryImages.slice(0, 11)" 
                    :key="index" 
                    :src="image.image"
                    alt="Gallery Image" />
            </div>

            <h2>2022</h2>
            <div class="gallery-grid">
                <img v-for="(image, index) in galleryImages.slice(12, 22)" 
                    :key="index" 
                    :src="image.image"
                    alt="Gallery Image" />
            </div>
        </section>
    </main>
</template>

<script>
export default {
    name: "GalleryView",
    data() {
        return {
            galleryImages: [], // Здесь будут храниться изображения
        };
    },
    async created() {
        try {
            const response = await fetch('http://127.0.0.1:3000/gallery-images');
            this.galleryImages = await response.json(); // Сохраняем данные в `galleryImages`
        } catch (error) {
            console.error('Error loading gallery images:', error);
        }
    },
};
</script>

<style scoped>
@import url("../css/gallery.css");
</style>