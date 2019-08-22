<template>
  <div id="existential-facts">
  <BJumbotron class="jumbo-existential" header="Existential Facts">
  <BListGroup>
    <div class="general">
      <BListGroupItem class="metric-age flex-column align-items-start">
        <span>Metric Age: {{$store.state.generalResults.metricBirthdate}} days</span>
      </BListGroupItem>
      <BListGroupItem class="flex-column align-items-start">
        <h3>Life Expectancy:</h3>
        <div class="life-expectancy">
          Male:
          <div
            class="yearOfDeath"
          >Expected year of death: {{$store.state.generalResults.lifeExpectancy.male.year}}</div>
          <div
            class="remainingYears"
          >{{$store.state.generalResults.lifeExpectancy.male.remaining}} years left</div>
        </div>
        <div class="life-expectancy">
          Female:
          <div
            class="yearOfDeath"
          >Expected year of death: {{$store.state.generalResults.lifeExpectancy.female.year}}</div>
          <div
            class="remainingYears"
          >{{$store.state.generalResults.lifeExpectancy.female.remaining}} years left</div>
        </div>
      </BListGroupItem>
      <BListGroupItem class="person-who-died flex-column align-items-start">
        <span>Notable Death on This Day</span>
        <h3>{{$store.state.generalResults.personWhoDied.name}}</h3>
        <h4
          v-if="$store.state.generalResults.personWhoDied.occupation"
        >{{$store.state.generalResults.personWhoDied.occupation}}</h4>
        <h4
          v-if="$store.state.generalResults.personWhoDied.notable"
        >{{$store.state.generalResults.personWhoDied.notable}}</h4>
        <h4
          v-if="$store.state.generalResults.personWhoDied.born && $store.state.generalResults.personWhoDied.died"
        >{{$store.state.generalResults.personWhoDied.born}} - {{$store.state.generalResults.personWhoDied.died}}</h4>
      </BListGroupItem>
    </div>
  </BListGroup>
  </BJumbotron>
  </div>
</template>

<script>
import { BJumbotron, BListGroup, BListGroupItem} from 'bootstrap-vue'

export default {
  name: "ExistentialFacts",
   component:{
      BListGroup,
      BListGroupItem,
  }
};
</script>


<style scoped>
#existential-facts{
    flex: 1;
    margin:20px;
    align-items: left;
    flex-grow:1;
}
.jumbo-existential{
    height:100%;
}
.life-expectancy {
    width: 45%;
    display: inline-block;
    padding: 10px;
}

</style>


