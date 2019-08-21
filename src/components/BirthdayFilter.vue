<template>
  <div class="birthday-filter">
    <h6>Please enter your birthday :</h6>
    <Datepicker  input-class="dates" calendar-class="calendar" :disabled-dates="this.$store.state.disabledDates" v-model="date" name="datePicker"></Datepicker>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";

export default {
  name: "BirthdayFilter",
  state: {},
  components: {
    Datepicker
  },
  computed: {
    date: {
      get() {
        return this.$store.state.date;
      },
      async set(date) {
        await this.$store.commit("setDate", date);
        await this.$store.dispatch("getGeneralResults");
        await this.$store.dispatch("getHeadlinesResults");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  .dates{
    text-align:center;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
  }
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .vdp-datepicker {
    text-align: center;

  }
  .calendar {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
  }
</style>
