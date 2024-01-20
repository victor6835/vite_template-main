<template>
    <div>
        <div class="card">
            <img src="https://picsum.photos/300/200/?random=10" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">{{title}}</h5>
                <p class="card-text">CARD</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                title: '這是一段標題'
            }
        }
    }
</script>