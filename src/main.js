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

// this will make the element in showBlogs.vue have a wide max maxWidth
// follows same protocol as above directive
// first param is the name so we did v-theme for the div
// second param is an object which has the functionality
Vue.directive('theme', {
  bind(el, binding, vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth = "1200px";
    } else if (binding.value == 'narrow'){
      el.style.maxWidth = "560px";
    }
    // v-theme:column in showBlogs.Vue
    // anything after the : colon is an argument
    // so we're saying if the argument is column, then add background of this color
    if(binding.arg == 'column'){
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
