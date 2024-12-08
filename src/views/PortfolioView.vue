<template>
    <main class="main">
        <section class="portfolio">
            <div class="portfolio-item">
                <img src="..\img/covers/gallery.png" alt="Галерея" class="portfolio-image">
                <div class="portfolio-text">
                    <h2>Галерея</h2>
                    <p>В данном разделе представлены мои самые лучшие работы в digital за 2022-2023 год<br>
                        Для ознакомления со всеми моими работами как в digital, так и в traditional можно перейти по
                        ссылкам в разделе “Обо мне”.<br></p>
                    <router-link to="/gallery" class="button">Перейти</router-link>
                </div>
            </div>
            <div class="portfolio-item">
                <img src="..\img/covers/games.png" alt="Игры" class="portfolio-image">
                <div class="portfolio-text">
                    <h2>Игры</h2>
                    <p>В данном разделе представлены мои игры на Unity.<br>
                        В каждую игру можно поиграть перейдя по ссылке</p>
                    <router-link to="games" class="button">Перейти</router-link>
                </div>
            </div>
            <div class="portfolio-item">
                <img src="..\img/covers/speedpaints.jpg" alt="Спидпейнты" class="portfolio-image">
                <div class="portfolio-text">
                    <h2>Спидпейнты</h2>
                    <p>В данном разделе представлены ускоренные видеозаписи моего процесса рисования.<br>
                        У каждого спидпеинта есть ссылка для лучшего ознакомления с итоговым артом.</p>
                    <router-link to="speedpaints" class="button">Перейти</router-link>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    export default {
        name: "PortfolioView",
    };
</script>

<style scoped>
@import url("../css/portfolio.css");
</style>