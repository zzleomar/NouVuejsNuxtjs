<template>
  <div id="app">
    <navegation/>
    <img src="./assets/logo.png">
    <!-- <transition name="slide-fade"> -->
      <router-view/>
  <!-- </transition> -->
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
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
