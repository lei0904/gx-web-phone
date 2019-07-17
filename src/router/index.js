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


var routes = [
  {
    path: '',
    redirect: '/workbench'
  },
  {
    path: '/workbench',
    name: 'Workbench',
    component: Workbench,
    meta:{
      value:1
    }
  },
  {
    path: '/bussiness',
    name: 'Bussiness',
    component: Bussiness,
    meta:{
      value:1
    }
  },
  {
    path: '/message',
    name: 'Message',
    component: Message,
    meta:{
      value:1
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
  /*{
    path: '/migrants',
    redirect: 'migrants_mine_page',
    name: 'Migrants',
    component: Migrants,
    children: [
      {
        path: '/migrants_mine_page',
        component: MigrantsMinePage
      },
      {
        path: '/migrants_audit_page',
        component: MigrantsAuditPage
      },
      {
        path: '/migrants_done_page',
        component: MigrantsDonePage
      }
    ]
  },
  {
    path: '/migrants_item',
    name: 'MigrantsItem',
    component: MigrantsItem
  },
  {
    path: '/migrants_info/:id',
    name: 'MigrantsInfo',
    component: MigrantsInfo
  },
  {
    path: '/migrants_audit/:id',
    name: 'MigrantsAudit',
    component: MigrantsAudit
  },
  {
    path: '/person',
    name: 'Person',
    component: Person
  },
  {
    path: '/area/:type',
    name: 'Area',
    component: Area
  },
  {
    path: '/criminalQuery',
    name: 'CriminalQuery',
    component: CriminalQuery
  },
  {
    path: '/prison',
    name: 'prison',
    component: Prison
  },
  {
    path: '/prisonDetail',
    name: 'PrisonDetail',
    component: PrisonDetail
  }*/
];

Vue.use(Router);

let router = new Router({
  routes
});

export default router
