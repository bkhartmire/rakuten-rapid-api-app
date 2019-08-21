<template>
  <div id="headlines">
    <h1>Headlines</h1>
    <div v-for="headline in $store.state.headlinesResults">
        <div>{{headline.title}}</div>
        <div>{{headline.snippet}}</div>
        <a v-bind:href="headline.web_url">{{headline.web_url}}</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'headlines',
}
</script>

<style>

</style>
