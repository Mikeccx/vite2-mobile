<template>
    <div>it starts with one</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
// import { useRoute } from 'vue-router'
export default defineComponent({
    props: {
        query: {}
    },
    setup(props) {
        // const route = useRoute()
          console.error('route', props)
        return {}
    }
})
</script>
<style lang="less" scoped></style>
