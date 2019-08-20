<template>
  <div id="general-results">
    <h1>Pop Culture</h1>
    <div class="general" v-for="(value,key) in $store.generalResults">
      <div class="metric-age"/>
      <div class="life-expectancy"/>
   
      <div class="top-song"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'general-results',
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




   <div class="people-who-died"/>
      <div class="birthday-buddies"/>