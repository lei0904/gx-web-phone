<template>
  <div id="activityDetail">
    <mt-header fixed title="活动参与">
      <mt-button icon="back" slot="left" @click="$router.back()"></mt-button>
    </mt-header>
    <div class="content">
      <div class="list">
        <mt-field label="活动主题"  disable="true" value="关于“三课一课”的思想汇报"></mt-field>
        <mt-field label="组织部门"  disable="true" value="教育科"></mt-field>
        <mt-field label="组织者"  disable="true" value="王一"></mt-field>
        <mt-field label="活动地点"  disable="true" value="大礼堂"></mt-field>
        <mt-field label="活动时间"  disable="true" value="2019-08-01"></mt-field>
        <mt-field type="textarea" disable="true" rows="4" value="活动说明：
   1.参与者提前15分钟入场
   2.需携带纸笔做好记录，活动结束后提交感想"></mt-field>
        <mt-field type="textarea" disable="true" rows="3" value="已参与人员：
   张三、张四、王二、王三、吴京、占元"></mt-field>
      </div>
      <mt-button class="normal-button" size="large" type="primary">报名参与</mt-button>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        topic:'',
        content:'',
      }
    }
  }
</script>

<style lang="scss">
  #activityDetail{
    textarea{
      text-align: left;
    }
    .normal-button{
      width: 90%;
      margin-left: 5%;
      margin-top: 35px;
    }
  }
</style>
