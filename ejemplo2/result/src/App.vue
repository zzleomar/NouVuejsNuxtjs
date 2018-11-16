<template>
  <div id="app">
    <navegation/>
    <img src="./assets/logo.png">
    <transition name="slide" 
  enter-active-class="slideInUp"
  leave-active-class="fade">
      <router-view/>
  </transition>
  </div>
</template>

<script>
import Nav from './components/nav.vue'

export default {
  name: 'App',
  components: {
    'navegation': Nav
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
  margin-top:5px;
}
</style>
