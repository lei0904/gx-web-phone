import Vue from 'vue';
import Api from '../api/index'

import * as migrants from './data/migrants'
import * as area from './data/area'
import * as cause from './data/cause'
import * as FlowNode from './data/flow_node'
import * as flow from './data/flow'
import  videoPatrol from './data/videopatrol'


/*广西demo*/
import * as workbench from './data/workbenchList'
import * as record from './data/criminalRecord'

import * as dailyData from  './data/dailyData'

 import * as zwData from './data/zwData'
import * as message from './data/message'


/**
 * 创建临时数据
 */
const setPromise = (data, loading) => {
  loading = typeof loading === 'undefined' ? true : loading;
  if (loading) {
    Vue['$indicator'].open('加载中...');
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (loading) {
        Vue['$indicator'].close();
      }
      resolve(data)
    }, 1000)
  })
}

if (Vue.$ces.Config.service === 'static') {
  var getFlowNode = () => setPromise(FlowNode.getFlowNode);

  var getArea = () => setPromise(area.list);
  var getCause = () => setPromise(cause.list);

  var migrantsSave = () => setPromise(migrants.save);

  var flowNext = () => setPromise(flow.next);
  var finishProcess = () => setPromise(flow.finishProcess);
  var destroyProcess = () => setPromise(flow.destroyProcess);

  var migrantsList = (params, loading) => setPromise(migrants.list, loading);
  var migrantsGetById = (params) => setPromise(migrants.getById);


  /*广西demo*/

  var workbenchList = (params, loading) => setPromise(workbench.tasksList, loading);
  var criminalRecord = (params, loading) => setPromise(record.list, loading);
  var videoPatrolList=(params,loading)=>setPromise(videoPatrol,loading)

  var criminalDynamic = (params, loading) => setPromise(record.dynamicList, loading);
  var criminalInstructor= (params, loading) => setPromise(record.instructorList, loading);
  var criminalTreatment= (params, loading) => setPromise(record.treatmentList, loading);
  var criminalEducation= (params, loading) => setPromise(record.educationList, loading);
  var penologicalList= (params, loading) => setPromise(record.penologicalList, loading);

  var dailyDataList= (params, loading) => setPromise(dailyData.dailyList, loading);
  var dailycheckList= (params, loading) => setPromise(dailyData.checkList, loading);
  var flowExamineList = (params, loading) => setPromise(dailyData.flowList, loading);
  var dailyExamineList = (params, loading) => setPromise(dailyData.examineList, loading);

  var messageList = (params, loading) => setPromise(message.list, loading);
  /*移动政务数据*/

  var zwIndexData =  (params, loading) => setPromise(zwData.indexListData, loading);
  var zwExamsList =  (params, loading) => setPromise(zwData.zwExamsList, loading);


} else {
  var getFlowNode = (params) => Api.post('dztz/api/flow!getFlowNode.action', params);

  var getArea = (params) => Api.post('dztz/api/flow!getArea.action', params);
  var getCause = (params) => Api.post('dztz/api/flow!getCause.action', params);
  var migrantsSave = (params, loading) => Api.post('dztz/api/flow!save.action', params, loading);

  var flowNext = (params, loading) => Api.post('dztz/api/flow!next.action', params, loading);
  var finishProcess = (params, loading) => Api.post('dztz/api/flow!finishProcess.action', params, loading);
  var destroyProcess = (params, loading) => Api.post('dztz/api/flow!destroyProcess.action', params, loading);

  var migrantsList = (params, loading) => Api.post('dztz/api/flow!list.action', params, loading);
  var migrantsGetById = (params) => Api.post('dztz/api/flow!getById.action', params);



}

export {
  getFlowNode,
  migrantsList,
  getArea,
  getCause,
  migrantsSave,
  flowNext,
  finishProcess,
  destroyProcess,
  migrantsGetById,
  videoPatrolList,
  workbenchList,
  criminalRecord,
  criminalDynamic,
  criminalInstructor,
  criminalTreatment,
  criminalEducation,
  penologicalList,
  dailyDataList,
  dailycheckList,
  flowExamineList,
  dailyExamineList,
  zwIndexData,
  zwExamsList,
  messageList
}
