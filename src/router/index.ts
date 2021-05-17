import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import viteconfig from '../../vite.config'
// console.error('viteconfig', viteconfig)
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        meta: {
            keepAlive: false,
            title: '主页'
        },
        component: Home
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: () => import('../views/Detail.vue'),
        props: (route: any) => ({ query: route.query })
    }
]

const router = createRouter({
    // baseurl
    history: createWebHistory('/vite'),
    routes
})

router.afterEach(() => { })

export default router
