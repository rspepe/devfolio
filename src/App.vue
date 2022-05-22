<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <DevFolio msg="rspepe"/>
</template>

<script>
import DevFolio from './components/DevFolio.vue'

export default {
  name: 'App',
  components: {
    DevFolio
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
