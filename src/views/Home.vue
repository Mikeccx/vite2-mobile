<template>
    <div>
        <AsyncWraper></AsyncWraper>
        <van-button @click="routerPush(`Home/${id}`, { ka: 2222 })"
            >home</van-button
        >
        <van-button @click="routerPush(`Detail/${id}`, { wu: 3333 })"
            >detail</van-button
        >
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AsyncWraper from '../components/AsyncWraper.vue'
export default defineComponent({
    inject: ['routerPush'],
    components: {
        AsyncWraper
    },
    setup() {
        const id = 1111
        return {
            id
        }
    }
})
</script>

<style lang="less" scoped></style>
