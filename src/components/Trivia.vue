<template>
  <div id="trivia">
    <BJumbotron class="trivia" header="Trivia" text-variant="white">
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

#trivia {
  overflow-y: scroll;
  height: 500px;
  margin: 20px;
 

  
}

.fun-facts {
  margin: 10px;
  color:black;
   
}

.headline-title {
  font-size: 1.5em;
  color: black;
  font-family: RelayCond, Arial, serif;
}

.trivia{
    background-image:url("http://alena-vysotskaya.ru/images/500/DSC100586336.jpg");
  background-repeat:no-repeat;
  background-position:left top;
  background-size:cover;
}
</style>
