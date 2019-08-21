<template>
  <div id="pop-culture">
    <h1>Pop Culture</h1>
    <h2> Billboard #1 </h2>
    <div class="billboard-artist">{{$store.state.generalResults.topSong.title}} by {{$store.state.generalResults.topSong.artist}}</div>
    <h2> Notable Birthday Buddies </h2>
    <div v-for="buddy in $store.state.generalResults.birthdayBuddies">
        <div>{{buddy}}</div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'pop-culture',
}
</script>

<style>
#pop-culture {
    float:right;
    width:50%;

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




   <div class="people-who-died"/>
      <div class="birthday-buddies"/>