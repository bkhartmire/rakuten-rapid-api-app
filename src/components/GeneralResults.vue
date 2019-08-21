<template>
  <div id="general-results">
    <h1>General Results</h1>
    <ExistentialFacts />
    <PopCulture />
  </div>
</template>

<script>
import ExistentialFacts from "./ExistentialFacts.vue";
import PopCulture from "./PopCulture.vue";

export default {
  name: "general-results",
  components: {
    ExistentialFacts,
    PopCulture
  }
};
</script>

<style>
</style>