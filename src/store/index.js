import Vue from 'vue'
import Vuex from 'vuex'

import Area from './modules/Area'
import Cause from './modules/Cause'
import FlowNode from './modules/FlowNode'

import MigrantsItem from './modules/MigrantsItem'

Vue.use(Vuex)

const state = {
  loginInfo: {
    dbBm: '第二十一监区',
    proposerid: '3404226',
    dbMc: '34095021',
  },

  /*loginInfo: {
    dbBm: '第十九监区',
    proposerid: '3404278',
    dbMc: '34095021',
  },*/

  /*loginInfo: {
    dbBm: '第十九监区',
    proposerid: '3404015',
    dbMc: '34095021',
  },*/

  /*loginInfo: {
    dbBm: '第十九监区',
    proposerid: '3404188',
    dbMc: '34095021',
  },*/

  scrollTop: 0,
  outsiders: [],
  needRefresh: false
};

const getters = {
  getLoginInfo: (state) => () => {
    return state.loginInfo;
  },
  getNeedRefresh: (state) => () => {
    return state.needRefresh;
  }
};

const actions = {
  setScrollTop(store, data) {
    store.commit('SET_SCROll_TOP', data)
  },

  addOutsider(store, data) {
    store.commit('ADD_OUTSIDER', data)
  },
  removeOutsider(store, data) {
    store.commit('REMOVE_OUTSIDER', data)
  },
  clearOutsider(store) {
    store.commit('CLEAR_OUTSIDER')
  },

  setNeedRefresh(store, data) {
    store.commit('SET_NEED_REFRESH', data)
  }
};

const mutations = {
  'SET_SCROll_TOP'(state, {
    scrollTop
  }) {
    state.scrollTop = scrollTop;
  },

  'ADD_OUTSIDER'(state, data) {
    state.outsiders.push(data);
  },
  'REMOVE_OUTSIDER'(state, data) {
    state.outsiders.splice(data, 1);
  },
  'CLEAR_OUTSIDER'(state) {
    Vue.set(state, 'outsiders', []);
  },

  'SET_NEED_REFRESH'(state, data) {
    state.needRefresh = data;
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,

  modules: {
    Area,
    Cause,
    FlowNode,
    MigrantsItem,
  }
})
