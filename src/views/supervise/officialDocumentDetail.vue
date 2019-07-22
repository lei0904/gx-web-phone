<template>
  <div class="officialDocument">
    <mt-header fixed title="公文详情">
      <router-link to="/officialDocument" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
        <div class="main">
          <div class="title">
            关于印发《关于公证服务银行业金融改革创新防范金融风险的指导意见》的通知
          </div>
          <div class="main_box">
            <p class="main_title">各市司法局：</p>
            <p class="main_content">我厅《关于为荣乐等16名同志申报公证员一般任职的请示》（辽司[2013]224号）已得到司法部批准，根据《司法部关于任命高靓等二百一十八人为公证员的决定》（司发通[2013]173号），荣乐等一十六人被任命为公证员。上述人员的任职时间从2013年12月17日算起，请各单位按照《公证法》、《公证员执业管理办法》的有关规定，携带相关资料，于2014年2月28日前到省厅办理执业手续。</p>
            <p class="main_title">特此通知</p>
            <p class="main_extra">发文单位：财务科</p>
            <p class="main_extra">发文时间：2019-08-31</p>
          </div>
          <mt-button class="normal-button" size="large" type="primary" @click="toPath('/supervise')">转督办</mt-button>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    methods: {
      toPath(val){
        this.$router.push(val)
      }
    },
    mounted(){

    }

  }

</script>

<style lang="scss">
  .officialDocument {
    .content {
      .title{
        padding:0 10px;/*no*/
        margin: 80px 0;
        font-size: 16px;/*no*/
        line-height: 20px;/*no*/
      }
      .main_box{
        padding:0 10px;/*no*/
        font-size: 14px;/*no*/
        line-height: 20px;/*no*/
        height: 860px;
        .main_title{
          text-align: center;
        }
        .main_content{
          text-indent: 10px;/*no*/
        }
        .main_extra{
          text-align: right;
          margin-top: 200px;
        }
        .main_extra:last-child{
          margin-top: 10px;
        }
      }
      .normal-button {
        width: 90%;
        margin-left: 5%;
        margin-top: 35px;
      }
    }
  }
</style>
