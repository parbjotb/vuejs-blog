<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div v-for="blog in filteredBlogs" class="single-blog">
      <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
      <article>{{ blog.body | snippet }}</article>
    </div>
  </div>
</template>

<script>

export default {

  data () {
    return {
      blogs:[],
      search: ''
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
  },
  computed: {
    // this is going to replace all blogs in the div above with the filtered array
    // filtered array coming from what we type in the search bar
    // the return statement returns an updated array
    filteredBlogs: function(){
      // current blogs array with something filtered out of it
      return this.blogs.filter((blog) => {
        // search is taken from v-model in the search bar at the top
        // goes through the blog posts to find a match for what we typed into the search
        return blog.title.match(this.search);
      });
    }
  },
  // registering custom filter locally instead of global main.js class
  filters: {
    //toUppercase(value){return value.toUpperCase()} is the same as below
    // no need for the :function(value) the above way
    'to-uppercase': function(value){
      return value.toUpperCase();
    }
  },
  directives: {
    'rainbow': {
      bind(el, binding, vnode){
        el.style.color = "#" + Math.random().toString().slice(2,8);
      }
    }
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
