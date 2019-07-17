import Vue from 'vue'

export default {
  state: {
    selectFlowNodes: []
  },
  getters: {

  },
  actions: {
    saveSelectFlowNodes(state, data) {
      state.commit('SAVE_SELECT_FLOW_NODES', data)
    }
  },
  mutations: {
    'SAVE_SELECT_FLOW_NODES'(state, data) {
      Vue.set(state, 'selectFlowNodes', data);
    }
  }
}
