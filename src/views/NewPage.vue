<template>
    <h1>It's fucking up</h1>
    <div>
        <HelloWorld/>
        This is a new page
    </div>
    <nav>this is nav bar</nav>
    <Card/>
    <Card2 title="我是Card 2"></Card2>
    <Card2 Victor="Victor is a handsome boy who are so smart"></Card2>
    <Card2 imgUrl="https://p2.bahamut.com.tw/B/2KU/78/954ce97362ea3462001ee0cedd1hupu5.JPG?v=1660819065121"></Card2> 
    <Card2 :src="jojo"></Card2>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Card from '@/components/Card.vue'
import Card2 from '@/components/Card2.vue'
export default {
    components: {
        Card, HelloWorld, Card2
    },
};
</script>
<style>
/* h1 {
        font-size: 50px;
    } */
</style>