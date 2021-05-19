<template>
    <div>it starts with one</div>
</template>
<script lang="ts">
import { defineComponent, inject } from 'vue'
// import { useRoute } from 'vue-router'
export default defineComponent({
    setup() {
        const route: any = inject('route')
        console.error('route', route?.query)
        return {}
    }
})
</script>
<style lang="less" scoped></style>
