import Dragbtn from './index.vue'

function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('dragbtn', Dragbtn)
}

const VueDragbtn = {
  install: install,
  Dragbtn
}

if (typeof window !== undefined && window.Vue) {
  window.Vue.use(VueDragbtn)
}

export default VueDragbtn
