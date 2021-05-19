<template>
    <div class="hello">{{ msg }}</div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import axios from 'axios'
export default defineComponent({
    name: 'HelloWorld',
    props: {
        msg: {
            type: String,
            required: true
        }
    },
    setup: async () => {
        const stateData = reactive({
            msg: 'ggg'
        })
        const res = await axios.get('/local/index')
        console.error('res', res.data)
        return new Promise((resolve) => {
            stateData.msg = res?.data
           resolve({
               ...toRefs(stateData)
           })
        })
    }
})
</script>

<style lang="less" scoped>
.hello {
    font-size: 16px;
}
</style>
