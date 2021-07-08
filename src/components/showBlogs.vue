<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <div v-for="blog in blogs" class="single-blog">
      <h2>{{ blog.title }}</h2>
      <article>{{ blog.body }}</article>
    </div>
  </div>
</template>

<script>

export default {

  data () {
    return {
      blogs:[]
    }
  },
  methods: {

  },
  created(){
    // this is the component that is first fired on the page
    // inside the get brackets we need to say where we get our data from
    // unlike posts we aren't sending data, so no 2nd parameter needed
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
      // slice makes it so we only get the first 0-10 items of the array
      // so we get an array of the first 10 posts and store them in blog data array
      this.blogs = data.body.slice(0,10);
    })
  }
}
</script>

<style>

#show-blogs{
  max-width: 800px;
  margin: 0 auto;
}

.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}


</style>
