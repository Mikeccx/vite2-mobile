<template>
    <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default defineComponent({
    name: 'App',
    components: {},
    setup() {
        const router = useRouter()
        const route = useRoute()
        const routerPush = (path: string, params: any) => {
            router.push({
                path: `/${path}/`,
                query: {
                    ...params
                }
            })
        }
        provide('routerPush', routerPush)
        provide('route', route)
        return {
            router,
            routerPush
        }
    }
})
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
