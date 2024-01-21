<template>
    <div>
        This is product new page
        <img src="" alt="">
    </div>
</template>

<script>
import axios from 'axios';
    export default{
        data(){
            return{
                responseData:{},
            }
        },
        created(){
            console.log(this.$route.params.id);
            const seed = this.$route.params.id
            axios.get(`https://randomuser.me/api/?seed=${seed}`).then(res => console.log(res))
        },
        methods: {
        axiosGetData() {
            const pageId = this.$route.params.id
            axios.get('https://fakestoreapi.com/products')
            .then(res => {
                if (res && res.data) {
                    this.loading = false
                    const target = res.data.find(item=>item.id == pageId)
                    this.responseData = target? target: {}
                }
            })
        }
    }
    }
</script>