<template>
  <div id="app">
    <img class="dethklok-logo" src="https://cdn11.bigcommerce.com/s-7va6f0fjxr/images/stencil/1280x1280/products/20177/82147/Dethklok-Metalocalypse__31269.1552172671.png?c=2&imbypass=on" alt="Dethklok Logo">
    <BirthdayFilter />
    <div v-if="$store.state.showGeneralResults">
      <GeneralResults /> 
      <Trivia/>
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
import Trivia from "./components/Trivia.vue";


export default {
  name: "app",
  components: {
    BirthdayFilter,
    Headlines,
    GeneralResults,
    PulseLoader,
    Trivia
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

.dethklok-logo{
  width:60%;

}
</style>
