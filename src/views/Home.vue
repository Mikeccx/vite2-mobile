<template>
    <div>
        <van-button @click="routerPush('home')">home</van-button>
        <van-button @click="routerPush('detail')">detail</van-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
    setup() {
        const router = useRouter()
        const routerPush = (path: String) => {
            router.push(`/${path}`)
        }
        return {
            routerPush
        }
    }
})
</script>

<style lang="less" scoped></style>
