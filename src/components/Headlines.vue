<template>
  <div id="headlines">
    <BJumbotron header="Headlines" >
      <b-list-group>
        <div class="headline" v-for="headline in $store.state.headlinesResults">
          <b-list-group-item class="flex-column align-items-start">
            <a
              v-bind:href="headline.web_url"
              target="_blank"
              class="headline-title"
            >{{headline.title}}</a>
            <div>{{headline.snippet}}</div>
          </b-list-group-item>
        </div>
      </b-list-group>
    </BJumbotron>
  </div>
</template>

<script>
import { BJumbotron, BListGroup, BListGroupItem } from "bootstrap-vue";
export default {
  name: "headlines",
  component: {
    BJumbotron,
    "b-list-group": BListGroup,
    "b-list-group-item": BListGroupItem
  }
};
</script>

<style>
b-list-group-item {
  background-color: light-gray;
}

#headlines {
  overflow-y: scroll;
  height: 500px;
  margin: 20px;
}

.headline {
  margin: 10px;
}

.headline-title {
  font-size: 1.5em;
  color: black;
  font-family: RelayCond, Arial, serif;
}
</style>
