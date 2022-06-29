<template>
    <section>

        <h1 @click="ciao()" >console</h1>

        <div v-if="post">
            <h1 >{{post.title}}</h1>
            <p>{{post.content}}</p>
            <ul v-if="post.tags">
                <li v-for="tag in post.tags" :key="tag.id">{{tag.name}}</li>
            </ul>
            <img :src="`/storage/${post.image}`" alt="">
        </div>
        <form @submit.prevent = "addComment()">
            <label for="username">Inserisci Nome</label>
            <input type="text" v-model="formData.username">

            <label for="content">Inserisci testo</label>
            <input type="text" v-model="formData.content">

            <button type="submit">Invia</button>
        </form>
        
        <div v-if="post.comments.length > 0">
           <div v-for="comment in post.comments" :key="comment.id">{{comment.content}}</div>
        </div>

    </section>
</template>
<script>
export default {
    name: 'SinglePostComponent',
    data(){
        return{
            post: null,
            formData: {
                username: "",
                content: "",
                post_id: "",
            },
        }
    },
    methods: {
       ciao(){
         console.log(this.post)
       },
       addComment(){
         axios.post('/api/comments', this.formData).then((response) => {
               console.log(response);
               this.post.comments.push(response.data)
         }).catch((error) =>{

         })
       }
    },
    mounted(){
        const slug = this.$route.params.slug;
        axios.get(`/api/posts/${slug}`).then((response) => {
            this.post = response.data;
            this.formData.post_id = this.post.id
        }).catch((error) => {
           this.$router.push({ name: 'page-404'}); //redirect() cioè mi porta alla pagina con nome page-404  NotFoundComponent 
        });
    }
}
</script>
<style lang="scss">

</style>

