<template>
    <div class="hello">{{ tip }}</div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
    name: 'HelloWorld',
    props: {
        msg: {
            type: String,
            required: true
        }
    },
    setup: () => {
        const stateData = reactive({
            tip: "one thing i don't know why，it doesn't even matter how hard you try~"
        })
        return {
            ...toRefs(stateData)
        }
    }
})
</script>

<style lang="less" scoped>
.hello {
    font-size: 16px;
}
</style>
