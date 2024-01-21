<template>
    <div>
        <button @click="click">Emit button</button>
    </div>
</template>

<script>
    export default{
        methods: {
            click(){
                console.log('click');
                this.$emit('emit-num');//往外觸發事件的自訂名稱
            }
        }
    }
</script>