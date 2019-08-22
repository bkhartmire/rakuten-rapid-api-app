<template>
  <div id="general-results">
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
#general-results {
  display:flex;
}
</style>

