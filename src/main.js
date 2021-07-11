import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

// Custom directives
// takes multiple parameters, first is name of the directive
// we have v-rainbow in showBlogs.vue so param name is rainbow
// 2nd param is an object which controls functionality of the directive
// bind is a lifestyle hook, as soon as a connection is made, the bind method fires
Vue.directive('rainbow', {
  bind(el, binding, vnode){
    // el refers to element itself, so in showBlogs it was h2
    // binding refers to data, so if we did v-rainbow="something"
    // vnode is virtual nodes
    // this gives the h2 element a random color 6 digit hash code
    // the code just gives us a 6 digit number and converts to a string
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
