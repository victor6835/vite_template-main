<template>
    <div class="card">
        <img :src="jojo" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <h5 class="card-title">{{ Victor }}</h5>
            <p class="card-text">CARD2</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        Victor: String,
        imgUrl: String,
        jojo: String,

    },
    data() {
        return {
            jojo:'https://www.cup.com.hk/wp-content/uploads/2019/08/444e.jpg',
        }
    }
}
</script>
<style lang="scss" scoped>
    img{
        width: 200px;
    }
</style>