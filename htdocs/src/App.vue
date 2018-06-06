<template>
  <div id="app">
    <img src="./assets/logo.png"><br>
    <router-link to="/">Home</router-link>
    <router-link to="/posts">Posts</router-link>
    <router-link to="/input">Text Input</router-link>
    <router-link to="/users">Users</router-link>
    <router-link to="/counter">Counter</router-link>
    <router-link to="/developments">Developmnets</router-link>
    <router-view></router-view>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto 0;
  max-width: 1200px;
}
</style>
