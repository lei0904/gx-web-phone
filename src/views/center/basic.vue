<template xmlns="http://www.w3.org/1999/html">
  <div id="basicInfo">
    <mt-header fixed title="党员基本信息">
      <router-link to="/center" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="content">
      <mt-cell title="姓名" value="王二小"></mt-cell>
      <mt-cell title="性别" value="男"></mt-cell>
      <mt-cell title="民族" value="汉"></mt-cell>
      <mt-cell title="出身日期" value="1990年09月09日"></mt-cell>
      <mt-cell title="入党时间" value="2008.10.1"></mt-cell>
      <mt-cell title="学历" value="研究生"></mt-cell>
      <mt-cell title="身份证号码" value="342401199009093354"></mt-cell>
      <mt-cell title="曾受表彰或处分">
        <div class="cite" >
          未受过处分。<br/>
        2003.10，被河北省总工会授予优秀工会积极分子称号；<br/>
        2004.11，被廊坊市财政局，廊坊市人事局评为廊坊市财政系统先进工作者；<br/>
        2005.09，被廊坊市委、市政府评为“廊坊市优秀人民公仆”；<br/>
        2005.12，被廊坊市财政局评为“廊坊市优秀会计工作者”；<br/>
        2006.06，被廊坊市委评为“优秀党务工作者”。
         </div>
      </mt-cell>
    </div>

  </div>
</template>
<style lang="scss">
  #basicInfo{
    .mint-cell-title{
      min-width: 110px;
    }
    .cite{
      padding: 20px;
    }
  }
</style>
<script>
  export default {
    name: "basicInfo",
    data(){
      return{}
    }

  }
</script>
