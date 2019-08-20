<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <BirthdayFilter />
  </div>
</template>

<script>
import BirthdayFilter from './components/BirthdayFilter.vue'
export default {
  name: 'app',
  components: {
    BirthdayFilter
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
  margin-top: 60px;
}
</style>
