<template>
  <div id="general-results">
    <h1>General Results</h1>
     <ExistentialFacts/>
     <PopCulture/>
    </div>
  </div>
</template>

<script>
import ExistentialFacts from "./ExistentialFacts.vue"
import PopCulture from "./PopCulture.vue"

export default {
  name: 'general-results',
  components:{
    ExistentialFacts,
    PopCulture
  }
}
</script>

<style>
#general-results {
  style:block;
}
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