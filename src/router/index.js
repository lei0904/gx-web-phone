import Vue from 'vue'
import Router from 'vue-router'


const Nav = r => require.ensure([], () => r(require('@/views/nav/nav.vue')), 'Nav')
const MigrantsItem = r => require.ensure([], () => r(require('@/views/migrants/item')), 'MigrantsItem')
const MigrantsInfo = r => require.ensure([], () => r(require('@/views/migrants/info')), 'MigrantsInfo')
const MigrantsAudit = r => require.ensure([], () => r(require('@/views/migrants/audit')), 'MigrantsAudit')

/*
 const Migrants = r => require.ensure([], () => r(require('@/views/migrants/index.vue')), 'Migrants')
 const MigrantsMinePage = r => require.ensure([], () => r(require('@/views/migrants/migrants_mine_page.vue')), 'MigrantsMinePage')
 const MigrantsAuditPage = r => require.ensure([], () => r(require('@/views/migrants/migrants_audit_page.vue')), 'MigrantsAuditPage')
 const MigrantsDonePage = r => require.ensure([], () => r(require('@/views/migrants/migrants_done_page.vue')), 'MigrantsDonePage')
 */

const Cause = r => require.ensure([], () => r(require('@/views/cause/cause')), 'Cause')
const Area = r => require.ensure([], () => r(require('@/views/area/area')), 'Area')
const Person = r => require.ensure([], () => r(require('@/views/person/person')), 'Person')
const FlowNode = r => require.ensure([], () => r(require('@/views/flow_node/flow_node')), 'FlowNode')


const Migrants = r => require.ensure([], () => r(require('@/views/migrants/page')), 'Migrants')
const MigrantsMinePage = r => require.ensure([], () => r(require('@/views/migrants/page_mine')), 'ExternalTrafficMine')
const MigrantsAuditPage = r => require.ensure([], () => r(require('@/views/migrants/page_audit')), 'ExternalTrafficAudit')
const MigrantsDonePage = r => require.ensure([], () => r(require('@/views/migrants/page_done')), 'ExternalTrafficDone')


const CriminalQuery = r => require.ensure([], () => r(require('@/views/criminalQuery/criminalQuery')), 'CriminalQuery')

const Prison = r => require.ensure([], () => r(require('@/views/prison/prison')), 'Prison')
const PrisonDetail = r => require.ensure([], () => r(require('@/views/prisonDetail/prisonDetail')), 'PrisonDetail')


/*广西demo*/
const Workbench = r => require.ensure([], () => r(require('@/views/workbench/workbench')), 'Workbench')
const Bussiness = r => require.ensure([], () => r(require('@/views/bussiness/bussiness')), 'Bussiness')
const Message = r => require.ensure([], () => r(require('@/views/message/message')), 'Message')
const Personal = r => require.ensure([], () => r(require('@/views/personal/personal')), 'Personal')
const CriminalRecord = r => require.ensure([], () => r(require('@/views/criminalRecord/criminalRecord')), 'CriminalRecord');
const CriminalDetail = r => require.ensure([], () => r(require('@/views/criminalDetail/criminalDetail')), 'CriminalDetail');
const CriminalDynamic = r => require.ensure([], () => r(require('@/views/criminalDynamic/criminalDynamic')), 'CriminalDynamic');
const Criminalnstructor = r => require.ensure([], () => r(require('@/views/criminalnstructor/criminalnstructor')), 'Criminalnstructor');
const CriminalTreatment = r => require.ensure([], () => r(require('@/views/criminalTreatment/criminalTreatment')), 'CriminalTreatment')
const CriminalEducation = r => require.ensure([], () => r(require('@/views/criminalEducation/criminalEducation')), 'CriminalEducation')
const PenologicalManage = r => require.ensure([], () => r(require('@/views/penologicalManage/penologicalManage')), 'PenologicalManage')
const talkManage = r => require.ensure([], () => r(require('@/views/talk/index')), 'talkManage') //个别谈话
const talkRecord = r => require.ensure([], () => r(require('@/views/talk/talkRecord')), 'talkRecord') //谈话记录
const newTalk = r => require.ensure([], () => r(require('@/views/talk/newTalk')), 'newTalk') //新增谈话

const Videopatrol = r => require.ensure([], () => r(require('@/views/video_patrol/Videopatrol')), 'Videopatrol')


const bluetoothSynch = r => require.ensure([], () => r(require('@/views/bluetoothSynch/index')), 'bluetoothSynch') //蓝牙同步

const clothingManage = r => require.ensure([], () => r(require('@/views/clothingManage/index')), 'clothingManage') //被服发放
const clothingNew = r => require.ensure([], () => r(require('@/views/clothingManage/new')), 'clothingManage') //新增被服发放
const clothingSetting = r => require.ensure([], () => r(require('@/views/clothingManage/setting')), 'clothingManage') //被服配置

const rollCallManage = r => require.ensure([], () => r(require('@/views/rollCallManage/index')), 'rollCallManage') //点名管理
const newRollCall = r => require.ensure([], () => r(require('@/views/rollCallManage/new')), 'newRollCall') //新建点名
const dataSummary = r => require.ensure([], () => r(require('@/views/rollCallManage/dataSummary')), 'dataSummary') //点名数据查询
const graphicSummary = r => require.ensure([], () => r(require('@/views/rollCallManage/graphicSummary')), 'graphicSummary') //点名台账查询

const medicineManage = r => require.ensure([], () => r(require('@/views/medicineManage/index')), 'medicineManage') //服药管理
const medicineManageNew = r => require.ensure([], () => r(require('@/views/medicineManage/new')), 'medicineManageNew') //新建服药




var routes = [
  {
    path: '',
    redirect: '/workbench'
  },
  {
    path: '/workbench',
    name: 'Workbench',
    component: Workbench,
    meta: {
      value: 1
    }
  },
  {
    path: '/bussiness',
    name: 'Bussiness',
    component: Bussiness,
    meta: {
      value: 1
    }
  },
  {
    path: '/message',
    name: 'Message',
    component: Message,
    meta: {
      value: 1
    }
  },
  {
    path: '/personal',
    name: 'Personal',
    component: Personal,
    meta: {
      value: 1
    }
  },,
  {
    path: '/talkManage',
    name: 'talkManage',
    component: talkManage,
    meta: {
      value: 2
    }
  },
  {
    path: '/talkRecord',
    name: 'talkRecord',
    component: talkRecord,
    meta: {
      value: 2
    }
  },
  {
    path: '/newTalk',
    name: 'newTalk',
    component: newTalk,
    meta: {
      value: 2
    }
  },
  {
    path: '/criminalDetail',
    name: 'criminalDetail',
    component: CriminalDetail,
    meta: {
      value: 3
    }
  },
  {
    path: '/criminalDynamic',
    name: 'criminalDynamic',
    component: CriminalDynamic,
    meta: {
      value: 4
    }
  },
  {
    path: '/criminalnstructor',
    name: 'criminalnstructor',
    component: Criminalnstructor,
    meta: {
      value: 4
    }
  },
  {
    path: '/criminalTreatment',
    name: 'criminalTreatment',
    component: CriminalTreatment,
    meta: {
      value: 4
    }
  },
  {
    path: '/criminalEducation',
    name: 'criminalEducation',
    component: CriminalEducation,
    meta: {
      value: 4
    }
  },
  {
    path: '/criminalEducation',
    name: 'criminalEducation',
    component: CriminalEducation,
    meta: {
      value: 4
    }
  },
  {
    path: '/penologicalManage',
    name: 'penologicalManage',
    component: PenologicalManage,
    meta: {
      value: 4
    }
  },
  {
    path: '/videopatrol',
    name: 'Videopatrol',
    component: Videopatrol,
    meta: {
      value: 2
    }
  },
  {
    path: '/personal',
    name: 'Personal',
    component: Personal,
    meta: {
      value: 1
    }
  },
  {
    path: '/criminalRecord',
    name: 'criminalRecord',
    component: CriminalRecord,
    meta: {
      value: 2
    }
  },

  {
    path: '/bluetoothsynch',
    name: 'bluetoothSynch',
    component: bluetoothSynch,
    meta: {
      value: 1
    }
  },
  {
    path: '/clothingmanage',
    name: 'clothingManage',
    component: clothingManage,
    meta: {
      value: 1
    }
  },
  {
    path: '/clothingnew',
    name: 'clothingNew',
    component: clothingNew,
    meta: {
      value: 1
    }
  },
  {
    path: '/clothingsetting',
    name: 'clothingSetting',
    component: clothingSetting,
    meta: {
      value: 1
    }
  },


  {
    path: '/rollcallmanage',
    name: 'rollCallManage',
    component: rollCallManage,
    meta: {
      value: 2
    }
  },
  {
    path: '/newrollcall',
    name: 'newRollCall',
    component: newRollCall,
    meta: {
      value: 2
    }
  },
  {
    path: '/datasummary',
    name: 'dataSummary',
    component: dataSummary,
    meta: {
      value: 2
    }
  },
  {
    path: '/graphicsummary',
    name: 'graphicSummary',
    component: graphicSummary,
    meta: {
      value: 2
    }
  },
  {
    path: '/medicinemanage',
    name: 'medicineManage',
    component: medicineManage,
    meta: {
      value: 2
    }
  },
  {
    path: '/medicinemanageNew',
    name: 'medicineManageNew',
    component: medicineManageNew,
    meta: {
      value: 2
    }
  }

];

Vue.use(Router);

let router = new Router({
  routes
});

export default router
