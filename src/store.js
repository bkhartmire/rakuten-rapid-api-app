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
        disabledDates: {
            to:new Date(2016, 0, 5),
            },
       generalResults:[],
       headlines:[],

    },
    // headLines: {

    // },
    mutations: {
        setDate(state,date) {
            state.date = date;
        }
    },
    actions: {

    },
})

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