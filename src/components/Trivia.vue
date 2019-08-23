<template>
  <div id="trivia">

    <BJumbotron header="Trivia" >
      <b-list-group horiziontal="md">
        <div class="fun-facts">
          <b-list-group-item class="flex-column align-items-start">
            <h6>Fun Fact On That Day</h6>
            <h4>{{$store.state.generalResults.dayFunFact}}</h4>
          </b-list-group-item>
         <b-list-group-item class="flex-column align-items-start">
            <h6>Fun Fact That Year</h6>
            <h4>{{$store.state.generalResults.yearFunFact}}</h4>
        </b-list-group-item>
          </div>
      </b-list-group>
    </BJumbotron>
  </div>
</template>

<script>
import { BJumbotron, BListGroup, BListGroupItem } from "bootstrap-vue";
export default {
  name: "trivia",
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
