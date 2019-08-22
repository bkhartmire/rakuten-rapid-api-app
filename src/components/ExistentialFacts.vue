<template>
  <div id="existential-facts">
  <BJumbotron class="jumbo-existential" header="Existential Facts">
  <BListGroup>
    <div class="general">
      <BListGroupItem class="metric-age flex-column align-items-start">
        <h3>Metric Age {{$store.state.generalResults.metricBirthdate}} days</h3>
      </BListGroupItem>
      <BListGroupItem class="flex-column align-items-start">
        <h3>Life Expectancy</h3>
        <div class="life-expectancy">
          <h4>Male</h4>
          <div
            class="yearOfDeath"
          ><h5>Death Year {{$store.state.generalResults.lifeExpectancy.male.year}}</h5></div>
          <div
            class="remainingYears"
          ><h5>{{$store.state.generalResults.lifeExpectancy.male.remaining}} years left</h5></div>
        </div>
        <div class="life-expectancy">
          <h4>Female</h4>
          <div
            class="yearOfDeath"
          ><h5> Death Year {{$store.state.generalResults.lifeExpectancy.female.year}}</h5></div>
          <div
            class="remainingYears"
          ><h5>{{$store.state.generalResults.lifeExpectancy.female.remaining}} years left</h5></div>
        </div>
      </BListGroupItem>
      <BListGroupItem class="person-who-died flex-column align-items-start">
        <h3>Notable Death on This Day</h3>
        <h4>{{$store.state.generalResults.personWhoDied.name}}</h4>
        <h5
          v-if="$store.state.generalResults.personWhoDied.occupation"
        >{{$store.state.generalResults.personWhoDied.occupation}}</h5>
        <h5
          v-if="$store.state.generalResults.personWhoDied.notable"
        >{{$store.state.generalResults.personWhoDied.notable}}</h5>
        <h5
          v-if="$store.state.generalResults.personWhoDied.born && $store.state.generalResults.personWhoDied.died"
        >{{$store.state.generalResults.personWhoDied.born}} - {{$store.state.generalResults.personWhoDied.died}}</h5>
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


