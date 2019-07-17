import Vue from 'vue'
export default {
  state: {
    data: {
      value1: null,
      value2: null,
      value3: null,
      value4: null,

      hasfemale: false,
      entryTime: '',
      outTime: '',
      selectArea: [],
      selectCause: [],
      selectFlowNode: [],
      valiStartTime: '',
      valiEndTime: ''
    }
  },
  getters: {
  },
  actions: {
    setMigrantsItemProperty(state, data) {
      state.commit('SET_MIGRANTS_ITEM_PROPERTY', data)
    },
    resetMigrantsItemData(state) {
      state.commit('RESET_MIGRANTS_ITEM_DATA')
    }
  },
  mutations: {
    'SET_MIGRANTS_ITEM_PROPERTY'(state, data) {
      Vue.set(state['data'], data['key'], data['val']);
    },
    'RESET_MIGRANTS_ITEM_DATA'(state) {
      Vue.set(state, 'data', {
        value1: null,
        value2: null,
        value3: null,
        value4: null,

        hasfemale: false,
        entryTime: '',
        outTime: '',
        selectArea: [],
        selectCause: [],
        selectFlowNode: [],
        valiStartTime: '',
        valiEndTime: ''
      });
    }
  }
}
