<template>
  <div class="login">
    <h1>This is an login page</h1>
    <SwitchButton/>
    <Loader />
  </div>
</template>

<style lang="scss">
  h1{
    font-size: 80px;
    color: aqua;
  }
</style>

<script>
  import SwitchButton from '@/components/SwitchButton.vue';
  import Loader from '@/components/Loader.vue';
  import HelloWorld from '@/components/HelloWorld.vue';
  
  export default {
    components: {
      SwitchButton, Loader, HelloWorld
    }
  }
</script>