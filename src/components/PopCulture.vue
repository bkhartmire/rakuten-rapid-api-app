<template>
  <div id="pop-culture">
    <BJumbotron class="jumboPop" header="Pop Culture">
      <BListGroup>
        <BListGroupItem class="flex-column align-items-start">
          <h2>Billboard #1</h2>
          <div
            class="billboard-artist text-muted"
          >{{$store.state.generalResults.topSong.title}} by {{$store.state.generalResults.topSong.artist}}</div>
        </BListGroupItem>
        <BListGroupItem class="flex-column align-items-start">
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
  display: inline-block;
  width: 50%;
  align-items: right;
  vertical-align: top;
}
.jumboPop {
  padding: 0;
}
</style>


