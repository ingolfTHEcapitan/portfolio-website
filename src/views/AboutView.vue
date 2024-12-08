<template>
    <main class="main">
        <div class="biography-item">
            <img class="biography-imgage" src="https://drive.google.com/uc?export=view&id=1BPPuH7uB7BI304B4C1saeeowFQdQa5hD" alt="Ingolf">
            <div class="biography-text">
                <h3>Биография</h3>
                <p> Привет!<br>
                Меня зовут Ингольф, так же известен как Марк и Мэй Воровски. Являюсь digital и traditional художником. 
                Люблю рисовать каноничных и оригинальных/авторских персонажей вселенной My Little Pony.<br>
                Сейчас активно развиваю вселенную со своими персонажами. Узнать о них подробнее можно  у меня в альбомах ВК. 
                Моя мечта, сделать игру где мои персонажи станут главными героями.<br>
                Мои любимые пони из мультсериала: Twilight Sparkle , Starlight Glimmer, Trixie Lulamoon, Sunset Shimmer.<br>
                Так же являюсь программистом и разработчиком игр на Unty уровня junior+. 
                Сейчас активно совершенствую свои навыки на пути к уровню Middle developer.<br>
                Уже успел разработать несколько игр. С некоторыми из них можно ознакомится на сайте в разделе Портфолио > Игры.<br>
                В ближайшее время планирую выложить некоторые из них на Itch.io и Яндекс игры.<br>
                </p>
            </div>
        </div>
        <div class="skills-links-container">
            <div class="skills">
                <h3>Мои скиллы</h3>
                <div class="skills-list">
                    <span>C#</span>
                    <span>Unity</span>
                    <span>GitHub</span>
                    <span>Css</span>
                    <span>Html</span>
                    <span>SQL</span>
                    <span>Git</span>
                    <span>MEVN</span>
                    <span>JavaScript</span>
                    <span>Krita</span>
                    <span>Sai</span>
                </div>
            </div>
            <div class="links">
                <h3>Ссылки</h3>
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
        </div>
    </main>
</template>

<script>
    export default {
        name: "AboutView"
    };
</script>

<style scoped>
    @import url("../css/biography.css");
    @import url("../css/links.css");
</style>