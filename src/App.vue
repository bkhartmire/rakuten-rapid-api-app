<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <BirthdayFilter />
    <div v-if="$store.state.showGeneralResults">
      <GeneralResults />
    </div>
    <div class="loading" v-if="!$store.state.showGeneralResults && $store.state.loadingGeneral">
      Loading General Results...
      <PulseLoader />
    </div>
    <div v-if="$store.state.showHeadlinesResults">
      <Headlines />
    </div>
    <div class="loading" v-if="!$store.state.showHeadlinesResults && $store.state.loadingHeadlines">
      Loading NY Times Headlines...
      <PulseLoader />
    </div>
  </div>
</template>

<script>
import BirthdayFilter from "./components/BirthdayFilter.vue";
import Headlines from "./components/Headlines.vue";
import GeneralResults from "./components/GeneralResults.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  name: "app",
  components: {
    BirthdayFilter,
    Headlines,
    GeneralResults,
    PulseLoader
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.loading {
  margin-top: 50px;
}
</style>
