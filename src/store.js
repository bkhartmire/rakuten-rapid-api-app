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
    date: new Date(2018, 11, 31),
    disabledDates: {
      to: new Date(1946, 0, 5),
      from: new Date(2018, 11, 31)
    },
    generalResults: {},
    headlinesResults: []
  },

  mutations: {
    setDate(state, date) {
      state.date = date;
      state.showGeneralResults = false;
      state.showHeadlinesResults = false;
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
      } catch (err) {
        console.error("Error in getting birthday results", err);
      }
    },
    async getHeadlinesResults({ commit }) {
      try {
        const year = this.state.date.getFullYear();
        const month = this.state.date.getMonth() + 1;
        const day = this.state.date.getDate().toLocaleString(undefined, {
          minimumIntegerDigits: 2,
          useGrouping: false
        });
        const { data: headlinesResults } = await axios.get(
          `/headlines/${year}/${month}/${day}`
        );
        commit("setHeadlinesResults", headlinesResults);
      } catch (err) {
        console.error;
      }
    }
  }
});
