<template>
  <div id="existential-facts">
    <h1>Existential Facts</h1>
    <div class="general">
      <div class="metric-age">
        <span>Metric Age: {{$store.state.generalResults.metricBirthdate}} days</span>
      </div>
      <div class="life-expectancy">
        <h3>Life Expectancy:</h3>
        <div class="male-life-expectancy">
          Male:
          <div
            class="yearOfDeath"
          >Expected year of death: {{$store.state.generalResults.lifeExpectancy.male.year}}</div>
          <div
            class="remainingYears"
          >{{$store.state.generalResults.lifeExpectancy.male.remaining}} years left</div>
        </div>
        <div class="female-life-expectancy">
          Female:
          <div
            class="yearOfDeath"
          >Expected year of death: {{$store.state.generalResults.lifeExpectancy.female.year}}</div>
          <div
            class="remainingYears"
          >{{$store.state.generalResults.lifeExpectancy.female.remaining}} years left</div>
        </div>
      </div>
      <div class="person-who-died">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExistentialFacts"
};
</script>


<style scoped>
#existential-facts{
    display: inline-block;
    width: 50%;
    align-items: left;
}

</style>


