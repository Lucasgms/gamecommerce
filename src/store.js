import Vue from "vue";
import Vuex from "vuex";

import games from "@/modules/games/store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    games
  }
});
