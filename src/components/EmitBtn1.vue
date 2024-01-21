<template>
    <div>
        <button @click="emitData">emitbtn</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text:'內部資料來囉'
            }
        },
        methods: {
            emitData() {
                this.$emit('emit-text', this.text)
            }
        },
    }
</script>