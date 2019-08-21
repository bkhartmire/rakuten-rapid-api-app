<template>
  <div id="pop-culture">
  <BJumbotron class="jumboPop" header="Pop Culture">
  <BListGroup>
  <BListGroupItem   class="flex-column align-items-start">
    <h2> Billboard #1 </h2>
    <div class="billboard-artist text-muted">{{$store.state.generalResults.topSong.title}} by {{$store.state.generalResults.topSong.artist}}</div>
    </BListGroupItem>
      <BListGroupItem   class="flex-column align-items-start">

    <h2> Notable Birthday Buddies </h2>
    <div v-for="buddy in $store.state.generalResults.birthdayBuddies">
        <div>{{buddy}}</div>
    </div>
    </BListGroupItem>

    </BListGroupItem>
    </BListGroup>
    </BJumbotron>
    

  </div>
</template>

<script>
import { BJumbotron, BListGroup, BListGroupItem} from 'bootstrap-vue'

export default {
  name: 'pop-culture',
  component:{
      BListGroup,
      BListGroupItem,
  }
}
</script>

<style>
#pop-culture {
    display: inline-block;
    width: 50%;
    align-items: right;
    vertical-align: top;
}
.jumboPop {
    padding:0;
    
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