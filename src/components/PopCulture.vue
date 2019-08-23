<template>
  <div id="pop-culture">


  <BJumbotron class="jumbo-pop" header="Pop Culture">
  <BListGroup>
  <BListGroupItem   class="flex-column align-items-start">
    <h3> Billboard #1 </h3>
    <div class="billboard-artist text-muted">{{$store.state.generalResults.topSong.title}} by {{$store.state.generalResults.topSong.artist}}</div>

    <iframe id="ytplayer" type="text/html" v-bind:src="$store.state.generalResults.topSong.link" frameborder="0"></iframe>

    </BListGroupItem>
      <BListGroupItem   class="flex-column align-items-start">
    <div class="birthday-buddy">
      <h3>Notable Birthday Buddy</h3>
      <h4>{{$store.state.generalResults.birthdayBuddy.name}}</h4>
      <h5
        v-if="$store.state.generalResults.birthdayBuddy.occupation"
      >{{$store.state.generalResults.birthdayBuddy.occupation}}</h5>
      <h5
        v-if="$store.state.generalResults.birthdayBuddy.notable"
      >{{$store.state.generalResults.birthdayBuddy.notable}}</h5>
      <h5
        v-if="$store.state.generalResults.birthdayBuddy.born && $store.state.generalResults.birthdayBuddy.died"
      >{{$store.state.generalResults.birthdayBuddy.born}} - {{$store.state.generalResults.birthdayBuddy.died}}</h5>
    </div>
    </BListGroupItem>

    </BListGroup>


    </BJumbotron>
  </div>
</template>

<script>
import { BJumbotron, BListGroup, BListGroupItem } from "bootstrap-vue";

export default {
  name: "pop-culture",
  component: {
    BListGroup,
    BListGroupItem
  }
};
</script>

<style>
#pop-culture {

    flex:1;
    margin:20px;
    align-items: right;
    flex-grow:1;
}
.jumbo-pop {
    height:100%

}

</style>


