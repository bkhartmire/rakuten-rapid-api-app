<template>
  <div id="app">
    <BirthdayFilter />
    <GeneralResults/>
    <Headlines/>
  </div>
</template>

<script>
import BirthdayFilter from './components/BirthdayFilter.vue'
import Headlines from './components/Headlines.vue'
import GeneralResults from './components/GeneralResults.vue'



export default {
  name: 'app',
  components: {
    BirthdayFilter,
    Headlines,
    GeneralResults
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
