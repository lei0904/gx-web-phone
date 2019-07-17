import Vue from 'vue'

export default {
  state: {
    causes: {
    },
    selectCauseLeft: {},
    selectCauseRight: {},

    selectCauseShow: ''
  },
  getters: {
    getCausesByType: (state) => (type) => {
      return state.causes[type] || [];
    }
  },
  actions: {
    saveCausesByType(state, data) {
      state.commit('SAVE_CAUSES_BY_TYPE', data)
    },
    setSelectCauseLeft(state, data) {
      state.commit('SET_SELECT_CAUSE_LEFT', data)
    },
    setSelectCauseRight(state, data) {
      state.commit('SET_SELECT_CAUSE_RIGHT', data)
    },
    clearSelectCause(state) {
      state.commit('CLEAR_SELECT_CAUSE')
    }
  },
  mutations: {
    'SAVE_CAUSES_BY_TYPE'(state, data) {
      Vue.set(state['causes'], data['type'], data['causes']);
    },
    'SET_SELECT_CAUSE_LEFT'(state, data) {
      Vue.set(state, 'selectCauseLeft', data);
      Vue.set(state, 'selectCauseRight', {});
      Vue.set(state, 'selectCauseShow', state['selectCauseLeft']['NAME']);
    },
    'SET_SELECT_CAUSE_RIGHT'(state, data) {
      Vue.set(state, 'selectCauseRight', data);
      Vue.set(state, 'selectCauseShow', state['selectCauseLeft']['NAME'] + ' - ' + state['selectCauseRight']['NAME']);
    },
    'CLEAR_SELECT_CAUSE'(state) {
      Vue.set(state, 'selectCauseLeft', {});
      Vue.set(state, 'selectCauseRight', {});
      Vue.set(state, 'selectCauseShow', '');
    }
  }
}
