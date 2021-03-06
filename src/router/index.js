import Vue from 'vue'
import Router from 'vue-router'


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

//*蓝牙被服点名服药工具处置模块*//
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


const toolsManage = r => require.ensure([], () => r(require('@/views/toolsManage/index')), 'toolsManage') //工具发放管理
const inWarehouse = r => require.ensure([], () => r(require('@/views/toolsManage/inWarehouse')), 'inWarehouse') //出库
const outofWarehouse = r => require.ensure([], () => r(require('@/views/toolsManage/outofWarehouse')), 'outofWarehouse') //入库
const toolsManageHistory = r => require.ensure([], () => r(require('@/views/toolsManage/history')), 'toolsManageHistory') //历史收发记录
const inWarehouseQuery = r => require.ensure([], () => r(require('@/views/toolsManage/inWarehouseQuery')), 'inWarehouseQuery') //库存查询
const outofWarehouseQuery = r => require.ensure([], () => r(require('@/views/toolsManage/outofWarehouseQuery')), 'outofWarehouseQuery') //库外查询

const emergency = r => require.ensure([], () => r(require('@/views/emergency/index')), 'emergency') //应急处置
const emergencyFollowUp = r => require.ensure([], () => r(require('@/views/emergency/followUp')), 'emergencyFollowUp') //处置跟踪
const emergencyNew = r => require.ensure([], () => r(require('@/views/emergency/new')), 'emergencyNew') //事件添加


const superviseIndex = r => require.ensure([], () => r(require('@/views/supervise/index')), 'superviseIndex') //督查督办首页
const supervise = r => require.ensure([], () => r(require('@/views/supervise/supervise')), 'supervise') //督查督办
const superviseDetail = r => require.ensure([], () => r(require('@/views/supervise/superviseDetail')), 'superviseDetail') //督查督办详情
const officialDocument = r => require.ensure([], () => r(require('@/views/supervise/officialDocument')), 'officialDocument') //公文
const officialDocumentDetail = r => require.ensure([], () => r(require('@/views/supervise/officialDocumentDetail')), 'officialDocumentDetail') //公文详情
//*蓝牙被服点名服药工具处置模块END*//


const dailySupervision = r => require.ensure([], () => r(require('@/views/dailySupervision/index')), 'dailySupervision') //日常监管
const dailyCheck = r => require.ensure([], () => r(require('@/views/dailySupervision/check')), 'dailyCheck') //日考评登记
const dailyNewCheck = r => require.ensure([], () => r(require('@/views/dailySupervision/newCheck')), 'dailyNewCheck') //新建考评登记
const FlowExamine = r => require.ensure([], () => r(require('@/views/dailySupervision/flowExamine')), 'FlowExamine')
const LogExamine = r => require.ensure([], () => r(require('@/views/dailySupervision/logList')), 'LogExamine')
const NewLog = r => require.ensure([], () => r(require('@/views/dailySupervision/newLog')), 'NewLog')
const DailyExamine = r => require.ensure([], () => r(require('@/views/dailySupervision/DailyExamine')), 'DailyExamine')
const NewDaily = r => require.ensure([], () => r(require('@/views/dailySupervision/newDaily')), 'NewDaily')
const Chat = r => require.ensure([], () => r(require('@/views/message/chat')), 'Chat');


const myapp = r => require.ensure([], () => r(require('@/views/appcenter/index')), 'myapp') //我的应用
const appcenter = r => require.ensure([], () => r(require('@/views/appcenter/appcenter')), 'appcenter') //应用中心

const center = r => require.ensure([], () => r(require('@/views/center/center')), 'center') //政务个人中心



/*移动政务*/
const GovernmentIndex = r => require.ensure([], () => r(require('@/views/government/index')), 'GovernmentIndex'); //应用中心
const exams = r => require.ensure([], () => r(require('@/views/governmentExams/index')), 'exams'); //考试
const forum =r => require.ensure([], () => r(require('@/views/forum/forum')), 'forum'); //论坛
const addressList =r => require.ensure([], () => r(require('@/views/supervise/addressList')), 'addressList'); //论坛

/*shenjie*/
const partyFee = r => require.ensure([], () => r(require('@/views/partyFee/index')), 'partyFee') //党建收费
const ideaReport = r => require.ensure([], () => r(require('@/views/ideaReport/index')), 'ideaReport') //思想汇报
const ideaReportNew = r => require.ensure([], () => r(require('@/views/ideaReport/new')), 'ideaReportNew') //新建思想汇报
const activityEnroll = r => require.ensure([], () => r(require('@/views/activityEnroll/index')), 'activityEnroll') //活动报名
const activityEnrollDetail = r => require.ensure([], () => r(require('@/views/activityEnroll/detail')), 'activityEnrollDetail') //活动参与
const missionManage = r => require.ensure([], () => r(require('@/views/missionManage/index')), 'missionManage') //任务管理
const missionManageDetail = r => require.ensure([], () => r(require('@/views/missionManage/detail')), 'missionManageDetail') //任务详情
const threeOne = r => require.ensure([], () => r(require('@/views/threeOne/index')), 'threeOne') //三会一课
const specialSubject = r => require.ensure([], () => r(require('@/views/specialSubject/index')), 'specialSubject') //专题教育
const combatCorruption = r => require.ensure([], () => r(require('@/views/combatCorruption/index')), 'combatCorruption') //反腐倡廉

const login = r => require.ensure([], () => r(require('@/views/login/login')), 'login') //登录
const basic = r => require.ensure([], () => r(require('@/views/center/basic')), 'basic') //

var routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta:{
      value:0
    }
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
    meta:{
      value:1
    }
  },

  {
    path:'/videopatrol',
    name:'Videopatrol',
    component:Videopatrol,
    meta:{
      value:2
    }
  },
  {
    path: '/criminalRecord',
    name: 'criminalRecord',
    component: CriminalRecord,
    meta:{
      value:2
    }
  },
  {path: '/talkManage',
    name: 'talkManage',
    component: talkManage,
    meta:{
      value:2
    }
  },
  {path: '/talkRecord',
    name: 'talkRecord',
    component: talkRecord,
    meta:{
      value:2
    }
  },
  {path: '/newTalk',
    name: 'newTalk',
    component: newTalk,
    meta:{
      value:3
    }
  },
  {
    path: '/criminalDetail',
    name: 'criminalDetail',
    component: CriminalDetail,
    meta:{
      value:3
    }
  },
  {
    path: '/criminalDynamic',
    name: 'criminalDynamic',
    component: CriminalDynamic,
    meta:{
      value:4
    }
  },
  {
    path: '/criminalnstructor',
    name: 'criminalnstructor',
    component: Criminalnstructor,
    meta:{
      value:4
    }
  },
  {
    path: '/criminalTreatment',
    name: 'criminalTreatment',
    component: CriminalTreatment,
    meta:{
      value:4
    }
  },
  {
    path: '/criminalEducation',
    name: 'criminalEducation',
    component: CriminalEducation,
    meta:{
      value:4
    }
  },
  {
    path: '/penologicalManage',
    name: 'penologicalManage',
    component: PenologicalManage,
    meta:{
      value:4
    }
  },

  {
    path: '/dailySupervision',
    name: 'dailySupervision',
    component: dailySupervision,
    meta:{
      value:2
    }
  },
  {
    path: '/dailyCheck',
    name: 'dailyCheck',
    component: dailyCheck,
    meta:{
      value:3
    }
  },
  {
    path: '/dailyNewCheck',
    name: 'dailyNewCheck',
    component: dailyNewCheck,
    meta:{
      value:4
    }
  },
  {
    path: '/flowExamine',
    name: 'FlowExamine',
    component: FlowExamine,
    meta:{
      value:3
    }
  },
  {
    path: '/logExamine',
    name: 'LogExamine',
    component: LogExamine,
    meta:{
      value:3
    }
  },
  {
    path: '/newLog',
    name: 'NewLog',
    component: NewLog,
    meta:{
      value:4
    }
  },
  {
    path: '/dailyExamine',
    name: 'DailyExamine',
    component: DailyExamine,
    meta:{
      value:3
    }
  },
  {
    path: '/newDaily',
    name: 'NewDaily',
    component: NewDaily,
    meta:{
      value:4
    }
  },
  {
    path: '/bluetoothsynch',
    name: 'bluetoothSynch',
    component: bluetoothSynch,
    meta: {
      value: 2
    }
  },
  {
    path: '/clothingmanage',
    name: 'clothingManage',
    component: clothingManage,
    meta: {
      value: 2
    }
  },
  {
    path: '/clothingnew',
    name: 'clothingNew',
    component: clothingNew,
    meta: {
      value: 3
    }
  },
  {
    path: '/clothingsetting',
    name: 'clothingSetting',
    component: clothingSetting,
    meta: {
      value: 3
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
      value: 3
    }
  },
  {
    path: '/datasummary',
    name: 'dataSummary',
    component: dataSummary,
    meta: {
      value: 3
    }
  },
  {
    path: '/graphicsummary',
    name: 'graphicSummary',
    component: graphicSummary,
    meta: {
      value: 3
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
      value: 3
    }
  },
  {
    path: '/toolsmanage',
    name: 'toolsManage',
    component: toolsManage,
    meta: {
      value: 2
    }
  },
  {
    path: '/inwarehouse',
    name: 'inWarehouse',
    component: inWarehouse,
    meta: {
      value: 3
    }
  },
  {
    path: '/outofwarehouse',
    name: 'outofWarehouse',
    component: outofWarehouse,
    meta: {
      value: 3
    }
  },
  {
    path: '/toolsmanagehistory',
    name: 'toolsManageHistory',
    component: toolsManageHistory,
    meta: {
      value: 3
    }
  },
  {
    path: '/inwarehousequery',
    name: 'inWarehouseQuery',
    component: inWarehouseQuery,
    meta: {
      value: 3
    }
  },
  {
    path: '/outofwarehousequery',
    name: 'outofWarehouseQuery',
    component: outofWarehouseQuery,
    meta: {
      value: 3
    }
  },
  {
    path: '/emergency',
    name: 'emergency',
    component: emergency,
    meta: {
      value: 2
    }
  },
  {
    path: '/emergencyfollowup',
    name: 'emergencyFollowUp',
    component: emergencyFollowUp,
    meta: {
      value: 3
    }
  },
  {
    path: '/emergencynew',
    name: 'emergencyNew',
    component: emergencyNew,
    meta: {
      value: 4
    }
  },
  {
    path: '/superviseIndex',
    name: 'superviseIndex',
    component: superviseIndex,
    meta: {
      value: 2
    }
  },
  {
    path: '/supervise',
    name: 'supervise',
    component: supervise,
    meta: {
      value: 3
    }
  },
  {
    path: '/superviseDetail',
    name: 'superviseDetail',
    component: superviseDetail,
    meta: {
      value: 4
    }
  },
  {
    path: '/officialDocument',
    name: 'officialDocument',
    component: officialDocument,
    meta: {
      value: 3
    }
  },
  {
    path: '/officialDocumentDetail',
    name: 'officialDocumentDetail',
    component: officialDocumentDetail,
    meta: {
      value: 4
    }
  },
  {
    path: '/myapp',
    name: 'myapp',
    component: myapp,
    meta:{
      value:1
    }
  },
  {
    path: '/appcenter',
    name: 'appcenter',
    component: appcenter,
    meta:{
      value:1
    }
  },
  {
    path: '/governmentIndex',
    name: 'GovernmentIndex',
    component: GovernmentIndex,
    meta:{
      value:2
    }
  },
  {
    path: '/exams',
    name: 'exams',
    component: exams,
    meta:{
      value:3
    }
  },
  {
    path: '/partyFee',
    name: 'partyFee',
    component: partyFee,
    meta:{
      value:5
    }
  },
  {
    path: '/ideaReport',
    name: 'ideaReport',
    component: ideaReport,
    meta:{
      value:5
    }
  },
  {
    path: '/ideaReportNew',
    name: 'ideaReportNew',
    component: ideaReportNew,
    meta:{
      value:6
    }
  },
  {
    path: '/activityEnroll',
    name: 'activityEnroll',
    component: activityEnroll,
    meta:{
      value:5
    }
  },
  {
    path: '/activityEnrollDetail',
    name: 'activityEnrollDetail',
    component: activityEnrollDetail,
    meta:{
      value:6
    }
  },
  {
    path: '/missionManage',
    name: 'missionManage',
    component: missionManage,
    meta:{
      value:5
    }
  },
  {
    path: '/missionManageDetail',
    name: 'missionManageDetail',
    component: missionManageDetail,
    meta:{
      value:6
    }
  },
  {
    path: '/threeOne',
    name: 'threeOne',
    component: threeOne,
    meta:{
      value:5
    }
  },
  {
    path: '/specialSubject',
    name: 'specialSubject',
    component: specialSubject,
    meta:{
      value:5
    }
  },
  {
    path: '/combatCorruption',
    name: 'combatCorruption',
    component: combatCorruption,
    meta:{
      value:5
    }
  },
  {
    path: '/forum',
    name: 'forum',
    component: forum,
    meta:{
      value:3
    }
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    meta:{
      value:3
    }
  },

  {
    path: '/addressList',
    name: 'addressList',
    component: addressList,
    meta:{
      value:4
    }
  },
  {
    path: '/center',
    name: 'center',
    component: center,
    meta:{
      value:3
    }
  },
  {
    path: '/basic',
    name: 'basic',
    component: basic,
    meta:{
      value:4
    }
  },



];

Vue.use(Router);

let router = new Router({
  routes
});

export default router
