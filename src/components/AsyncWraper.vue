<template>
    <Suspense>
        <template #default>
            <HelloWorld />
        </template>
        <template #fallback> Loading ... </template>
    </Suspense>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './HelloWorld.vue'
export default defineComponent({
    components: {
        HelloWorld
    },
    setup: () => {}
})
</script>

<style lang="less" scoped>
.hello {
    font-size: 16px;
}
</style>
