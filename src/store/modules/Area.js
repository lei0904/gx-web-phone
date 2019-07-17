import Vue from 'vue'

export default {
  state: {
    areas: {

    },
    selectAreas: []
  },
  getters: {
    getAreasByType: (state) => (type) => {
      return state.areas[type] || [];
    }
  },
  actions: {
    saveAreasByType(state, data) {
      state.commit('SAVE_AREAS_BY_TYPE', data)
    },
    clearSelectAreas(state) {
      state.commit('CLEAR_SELECT_AREAS')
    }
  },
  mutations: {
    'SAVE_AREAS_BY_TYPE'(state, data) {
      Vue.set(state['areas'], data['type'], data['areas']);
    },
    'CLEAR_SELECT_AREAS'(state) {
      Vue.set(state, 'selectAreas', []);
    }
  }
}
