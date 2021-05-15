<template>
    <div>
        <van-button @click="routerPush('Home')">home</van-button>
        <van-button @click="routerPush('Detail')">detail</van-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
    setup() {
        const router = useRouter()
        const routerPush = (path: String) => {
            router.push({
                path: `/${path}/111111`,
                query: {
                    q: '111122'
                }
            })
        }
        return {
            routerPush
        }
    }
})
</script>

<style lang="less" scoped></style>
