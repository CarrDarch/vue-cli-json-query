<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul class="users">
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>

	<UsersList/>

	<div class="iput">
		<h2 class="input-text" v-text="input_val"></h2>
		<input type="text" v-model="input_val">
	</div>

	<div class="counter">
		<button class="btn btn-primary" v-on:click="counter++">You clicked the counter {{counter}} times! </button>
	</div>

	<NewsList/>
  </div>
  
</template>

<script>
import UsersList from './UsersList.vue';
import NewsList from './NewsList.vue';

export default {
  name: "HelloWorld",
  data() {
    return {
	  msg: "Welcome to Your Vue.js App, Willz",
	  input_val: '',
	  counter: 0
    };
  },
  components: {
	  UsersList,
	  NewsList
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.input-text {
	border: 1px solid #ddd;
	padding: 10px 20px;
	width: 15%;
	margin: 10px auto;
}
</style>
