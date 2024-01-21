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
    <Card2 :imgUrl="mashle"></Card2>
    <EmitButton @emit-num="addnum"></EmitButton>
    {{ num }}
    <EmitBtn1 @emit-text="getData"></EmitBtn1>
    {{ text }}
    <EmitBtn2 @emitText="getEmitBtn2"></EmitBtn2>
    {{ word }}
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Card from '@/components/Card.vue'
import Card2 from '@/components/Card2.vue'
import EmitButton from '@/components/icons/EmitButton.vue';
import EmitBtn1 from '@/components/EmitBtn1.vue'
import EmitBtn2 from '@/components/EmitBtn2.vue'
export default {
    data() {
        return {
            mashle: 'https://imgs.niusnews.com/upload/posts/posts_image3_124892_1681111677.jpg',
            num:'1',
            text:'我是外部資料',
            word:'外からのもの'
        }
    },
    components: {
    Card, HelloWorld, Card2, EmitButton, EmitBtn1,
    EmitBtn2
},
    methods: {
        addnum(){
            this.num++
        },
        getData(text){
            this.text = text
        },
        getEmitBtn2(text){
            this.word = text
        }
    }
};
</script>
