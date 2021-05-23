import Vue from 'vue'
import Vuex from 'vuex'
import users from './users'
// import json from './questions.json'
//import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
      users,
    }
  });

