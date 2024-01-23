<template>
  <div class="about">
    <h1>This is an about page</h1>
    <SwitchButton></SwitchButton>
    <p>{{ user.name }}</p>
    <p>{{ user.getUserName }}</p>
    <p>{{ user.age }}</p>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/scss/main.scss";

@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;

    h1 {
      color: $mgreen;
    }
  }

}
</style>
<script>
import SwitchButton from '@/components/SwitchButton.vue';

import userStore from '@/stores/user'
export default {
  components: {
    SwitchButton
  },
  setup(){
    const user = userStore();
    return{
      user,
    }
  }
}
</script>
