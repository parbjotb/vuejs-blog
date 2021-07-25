export default {
  computed: {
    filteredBlogs: function(){
      // current blogs array with something filtered out of it
      return this.blogs.filter((blog) => {
        // search is taken from v-model in the search bar at the top
        // goes through the blog posts to find a match for what we typed into the search
        return blog.title.match(this.search);
      });
  }
}
