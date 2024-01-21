<!-- 把元件內text傳到元件外 -->
<template>
    <div>
        <button @click="emitData">emitbtn2</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text:'ないぶからのもの'    
            }
        },
        methods: {
            emitData(){
                // console.log('click');
                this.$emit('emitText', this.text)
                //this.text將會傳入參數
            }
        },
    }
</script>