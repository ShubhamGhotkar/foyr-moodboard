import Vue from "vue";
import Vuex from "vuex";
import { roomData, inspirationTypeData } from "../data/demoData";
import { moodboardData } from "../data/moodboardData";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    roomArray: roomData,
    inspirationArray: inspirationTypeData,
    // moodboardArray: [],
    moodboardArray: moodboardData,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
