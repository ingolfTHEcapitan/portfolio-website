<template>
    <main class="main">
        <section class="portfolio">
            <div class="portfolio-item">
                <img src="..\img/covers/sanake-game.png" alt="Snake Game" class="portfolio-image">
                <div class="portfolio-text">
                    <h2>Snake Game</h2>
                    <p>Классическая игра змейка на Unity.<br>
                        Цель игры: Съесть как можно больше яблок и достичь максимального размера змейки.</p>
                    <a v-if="getGameUrlById('675574a4f3393aab26b4c150')" :href="getGameUrlById('675574a4f3393aab26b4c150')['download-link']" class="button">Скачать</a>
                </div>
            </div>
            <div class="portfolio-item">
                <img src="..\img/covers/asteroids.png" alt="Asteroids" class="portfolio-image">
                <div class="portfolio-text">
                    <h2>Asteroids</h2>
                    <p>Реализация геймплейной формулы игры Asteroids от Atari на Unity.<br>
                        Игрок управляет космическим кораблем, уничтожая астероиды.<br>
                        Цель игры: Избегая столкновений уничтожить как можно больше астеройдов.</p>
                    <a v-if="getGameUrlById('675574a4f3393aab26b4c151')" :href="getGameUrlById('675574a4f3393aab26b4c151')['download-link']" class="button">Скачать</a>
                </div>
            </div>
            <div class="portfolio-item">
                <img src="..\img/covers/knife-game.png" alt="Knife game" class="portfolio-image">
                <div class="portfolio-text">
                    <h2>Knife game</h2>
                    <p>Моя первая игра на Unity<br>
                        Цель игры: Уничтожать щиты, не давая им пройти за границу экрана.</p>
                    <a v-if="getGameUrlById('675574a4f3393aab26b4c152')" :href="getGameUrlById('675574a4f3393aab26b4c152')['download-link']" class="button">Скачать</a>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    name: "GamesView",
    data() {
        return {
            games: [], // Все сылки на игры
        };
    },
    async created() {
        try {
            const response = await fetch('http://127.0.0.1:3000/games');
            this.games = await response.json(); // Загружаем сылки на игры
        } catch (error) {
            console.error('Error fetching games Url:', error);
        }
    },
    methods: {
        // Метод для ссылкок на игры по ID
        getGameUrlById(id) {
            return this.games.find(game => game._id === id);
        },
    },
};
</script>

<style scoped>
@import url("../css/portfolio.css");
</style>