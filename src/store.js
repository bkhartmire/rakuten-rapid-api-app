import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

axios.defaults.headers.common = {
  "Content-Type":"application/json",
};

Vue.use(Vuex);

export default new Vuex.Store({
    state:{

    date: new Date(2016, 9,  16),
    disabledDates:{
        to:new Date(2016, 0, 5),
        }
    },
    mutations: {
        setDate(state,date) {
            state.date = date;
        }
    },
    actions: {

    },
})