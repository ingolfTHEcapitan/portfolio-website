import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioView from '@/views/PortfolioView.vue'
import AboutView from '../views/AboutView.vue'
import GalleryView from '@/views/GalleryView.vue'
import GamesView from '@/views/GamesView.vue'
import SpeedpaintView from '@/views/SpeedpaintView.vue'


const routes = [
   { path: '/', name: 'home', component: HomeView },
   { path: '/about', name: 'about', component: AboutView},
   { path: '/portfolio', name: 'portfolio', component: PortfolioView},
   { path: '/games', name: 'games', component: GamesView},
   { path: '/gallery', name: 'gallary', component: GalleryView},
   { path: '/speedpaints', name: 'speedpaint', component: SpeedpaintView}
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes
})

export default router
