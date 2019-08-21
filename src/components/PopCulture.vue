<template>
  <div id="pop-culture">
    <h1>Pop Culture</h1>
    <h2>Billboard #1</h2>
    <!-- <div
      class="billboard-artist"
    >{{$store.state.generalResults.topSong.title}} by {{$store.state.generalResults.topSong.artist}}</div>-->
    <div class="birthday-buddy">
      <h2>Notable Birthday Buddy</h2>
      <h3>{{$store.state.generalResults.birthdayBuddy.name}}</h3>
      <h4
        v-if="$store.state.generalResults.birthdayBuddy.occupation"
      >{{$store.state.generalResults.birthdayBuddy.occupation}}</h4>
      <h4
        v-if="$store.state.generalResults.birthdayBuddy.notable"
      >{{$store.state.generalResults.birthdayBuddy.notable}}</h4>
      <h4
        v-if="$store.state.generalResults.birthdayBuddy.born && $store.state.generalResults.birthdayBuddy.died"
      >{{$store.state.generalResults.birthdayBuddy.born}} - {{$store.state.generalResults.birthdayBuddy.died}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "pop-culture"
};
</script>

<style>
#pop-culture {
  float: right;
  width: 50%;
}
</style>