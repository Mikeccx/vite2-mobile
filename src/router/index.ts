import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {
            keepAlive: false,
            title: '主页'
        },
        component: Home
    },
    {
        path: '/detail',
        name: 'Detail',
        component: () => import('../views/Detail.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.afterEach(() => {})

export default router
