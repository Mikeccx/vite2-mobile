<template>
    <div class="hello">{{ msg }}</div>
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
            msg: 'ggg'
        })
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    ...toRefs(stateData)
                })
            }, 2000)
        })
    }
})
</script>

<style lang="less" scoped>
.hello {
    font-size: 16px;
}
</style>
