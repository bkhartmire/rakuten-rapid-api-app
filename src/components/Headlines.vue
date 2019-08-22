<template>
  <div id="headlines">
  <BJumbotron header="Headlines">
  <b-list-group>
    <div v-for="headline in $store.state.headlinesResults">
        <b-list-group-item   class="flex-column align-items-start gray">
        <div>{{headline.title}}</div>
        <div>{{headline.snippet}}</div>
        <a v-bind:href="headline.web_url">{{headline.web_url}}</a>
        </b-list-group-item>
    </div>
    </b-list-group>
    </BJumbotron>
  </div>
</template>

<script>
import { BJumbotron, BListGroup, BListGroupItem} from 'bootstrap-vue'
export default {
  name: 'headlines',
  component:{
      BJumbotron,
      "b-list-group":BListGroup,
      "b-list-group-item":BListGroupItem,
  }
}
</script>

<style>
.gray {
    background-color:gray;
}
b-list-group-item {
    background-color:light-gray;
}
</style>
