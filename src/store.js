import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

axios.defaults.headers.common = {
  "Content-Type": "application/json"
};

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showGeneralResults: false,
    showHeadlinesResults: false,
    loadingGeneral: false,
    loadingHeadlines: false,
    date: new Date(),
    disabledDates: {
      to: new Date(1946, 0, 5)
    },
    generalResults: {},
    headlinesResults: []
  },

  mutations: {
    setDate(state, date) {
      state.date = date;
      state.loadingGeneral = true;
      state.loadingHeadlines = true;
    },
    setGeneralResults(state, generalResults) {
      state.generalResults = generalResults;
      state.showGeneralResults = true;
      state.loadingGeneral = false;
    },
    setHeadlinesResults(state, headlinesResults) {
      state.headlinesResults = headlinesResults;
      state.showHeadlinesResults = true;
      state.loadingHeadlines = false;
    }
  },
  actions: {
    async getGeneralResults({ commit }) {
      try {
        console.log(this.state.date);
        const year = this.state.date.getFullYear();
        const month = this.state.date.getMonth() + 1;
        const day = this.state.date.getDate().toLocaleString(undefined, {
          minimumIntegerDigits: 2,
          useGrouping: false
        });
        const { data: generalResults } = await axios.get(
          `/birthday/${year}/${month}/${day}`
        );
        commit("setGeneralResults", generalResults);
        console.log(generalResults);
      } catch (err) {
        console.error("Error in getting birthday results", err);
      }
    },
    async getHeadlinesResults({ commit }) {
      try {
        console.log(this.state.date);
        const year = this.state.date.getFullYear();
        const month = this.state.date.getMonth() + 1;
        const day = this.state.date.getDate().toLocaleString(undefined, {
          minimumIntegerDigits: 2,
          useGrouping: false
        });
        console.log(day);
        const { data: headlinesResults } = await axios.get(
          `/headlines/${year}/${month}/${day}`
        );
        console.log(headlinesResults);
        commit("setHeadlinesResults", headlinesResults);
      } catch (err) {
        console.error;
      }
    }
  }
});
