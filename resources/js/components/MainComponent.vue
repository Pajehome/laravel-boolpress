<template>
    <div>
        <h1>Sono il main</h1>

        <ul>
            <li v-for="(post, index) in posts" :key="index">
                {{post.title}}
            </li>
                <a href="#" @click="getDetail(post.slug, index)">Vedi dettaglio</a>
                <span v-if="post.detail" >{{post.detail.slug}}</span>
        </ul>
    </div>

</template>
<script>
export default {
    name: 'MainComponent',
    data(){
        return {
          post : [],
        }
    },
    method : {
            getDetail(slug){
              axios.get('/api/posts/' + slug).then((response)=>{
              console.log(response.data);
              this.post[index].detail = response.data;
        })  
            }
    },
    created(){
        axios.get('/api/posts').then((response)=>{
            console.log(response.data);
            this.post = response.data;
        })
    }

}
</script>
<style lang="scss">

</style>