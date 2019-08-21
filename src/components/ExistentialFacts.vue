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
      <div class="people-who-died">
        <span>Notable Death on This Day</span>
        <div class="personWhoDied">
          <h3>{{$store.state.personWhoDied.name}}</h3>
          <h4 v-if="$store.state.personWhoDied.occupation">{{$store.state.personWhoDied.occupation}}</h4>
          <h4 v-if="$store.state.personWhoDied.notable">{{$store.state.personWhoDied.notable}}</h4>
          <h4
            v-if="$store.state.personWhoDied.born && $store.state.personWhoDied.died"
          >{{$store.state.personWhoDied.born}} - {{$store.state.personWhoDied.died}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExistentialFacts"
};
</script>

<style>
</style>