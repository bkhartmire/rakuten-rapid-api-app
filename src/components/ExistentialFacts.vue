<template>
  <div id="existential-facts">
    <h1>Existential Facts</h1>
    <div class="general">
      <div class="metric-age">
        <span>Metric Age:{{$store.state.generalResults.metricBirthdate}}days</span>
      </div>
      <div class="life-expectancy">
        <h3>Life Expectancy:</h3>
        <div class="male-life-expectancy">  Male:
            <div class="yearOfDeath">Expected year of death: {{$store.state.generalResults.lifeExpectancy.male.year}} </div>
            <div class="remainingYears">{{$store.state.generalResults.lifeExpectancy.male.remaining}} years left </div>
        </div>
        <div class="female-life-expectancy">Female:
            <div class="yearOfDeath">Expected year of death: {{$store.state.generalResults.lifeExpectancy.female.year}} </div>
            <div class="remainingYears">{{$store.state.generalResults.lifeExpectancy.female.remaining}} years left </div>
        </div>
      </div>
      <div class="people-who-died">
        <span>Notable Deaths</span>
        <div v-for="people in $store.state.generalResults.peopleWhoDied">{{people}}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ExistentialFacts',
//   computed: {
//     metricBirthdate:{
//       get() {
//           return this.$store.state.generalResults.metricBirthdate;
//       }
//     },
//   },
}
</script>

<style>

</style>

// {
//   "topSong": {
//     "title": "whatever",
//     "artist": "whoever"
//   },
//   "metricBirthdate": "10000",
//   "lifeExpectancy": {
//     "male": 2060,
//     "female": 2068
//   },
//   "birthdayBuddies": [
//     "Name Namerson",
//     "Namely Nameland"
//   ],
//   "peopleWhoDied": [
//     "I. M. Dead",
//     "Died-anne Buried"
//   ]
// }