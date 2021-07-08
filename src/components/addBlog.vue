<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form>
      <label>Blog Title:</label>
      <input type="text" v-model="title" required  />
      <label>Blog Content:</label>
      <textarea v-model="content"></textarea>
    </form>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title: {{ title }}</p>
      <p>Blog content: {{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      // by putting these properties in the data, it can be called in the preview section
      title: "",
      content: ""
    }
  },
  methods: {

  }
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}


</style>
