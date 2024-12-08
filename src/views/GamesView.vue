<template>
     <main class="main">
        <section class="portfolio">
            <div class="portfolio-item">
                <img src="..\img/covers/sanake-game.png" alt="Snake Game" class="portfolio-image">
                <div class="portfolio-text">
                    <h2>Snake Game</h2>
                    <p>Классическая игра змейка на Unity.<br>
                        Цель игры: Съесть как можно больше яблок и достичь максимального размера змейки.</p>
                    <a href="#" class="button">Скачать</a>
                </div>
            </div>
            <div class="portfolio-item">
                <img src="..\img/covers/asteroids.png" alt="Asteroids" class="portfolio-image">
                <div class="portfolio-text">
                    <h2>Asteroids</h2>
                    <p>Реализация геймплейной формулы игры Asteroids от Atari на Unity.<br>
                        Игрок управляет космическим кораблем, уничтожая астероиды.<br>
                        Цель игры: Избегая столкновений уничтожить как можно больше астеройдов.</p>
                    <a href="#" class="button">Скачать</a>
                </div>
            </div>
            <div class="portfolio-item">
                <img src="..\img/covers/knife-game.png" alt="Knife game" class="portfolio-image">
                <div class="portfolio-text">
                    <h2>Knife game</h2>
                    <p>Моя первая игра на Unity<br>
                        Цель игры: Уничтожать щиты, не давая им пройти за границу экрана.</p>
                    <a href="#" class="button">Скачать</a>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
   export default {
       name: "GamesView"
   };
</script>

<style scoped>
   @import url("../css/portfolio.css");
</style>