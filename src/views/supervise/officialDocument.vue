<template>
  <div class="officialDocument">
    <mt-header fixed title="公文">
      <router-link to="/superviseIndex" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content" :style="{height:listH+'px'}">
      <mt-search v-model="keyword"></mt-search>
      <div class="recordList">
        <div class="item" >
          <div class="title"><i></i>关于印发《关于公证服务银行业金融改革创新防范金融风险的指导意见》的通知</div>
          <mt-cell title="发文单位" value="财务科"></mt-cell>
          <mt-cell title="发文时间" value="2019-7-19"></mt-cell>
          <div class="button" @click="toPath('/officialDocumentDetail')">查看详情</div>
        </div>
        <div class="item" >
          <div class="title"><i></i>关于印发《关于公证服务银行业金融改革创新防范金融风险的指导意见》的通知</div>
          <mt-cell title="发文单位" value="财务科"></mt-cell>
          <mt-cell title="发文时间" value="2019-7-19"></mt-cell>
          <div class="button" @click="toPath('/officialDocumentDetail')">查看详情</div>
        </div>
        <div class="item" >
          <div class="title"><i></i>关于印发《关于公证服务银行业金融改革创新防范金融风险的指导意见》的通知</div>
          <mt-cell title="发文单位" value="财务科"></mt-cell>
          <mt-cell title="发文时间" value="2019-7-19"></mt-cell>
          <div class="button" @click="toPath('/officialDocumentDetail')">查看详情</div>
        </div>
        <div class="item" >
          <div class="title"><i></i>关于印发《关于公证服务银行业金融改革创新防范金融风险的指导意见》的通知</div>
          <mt-cell title="发文单位" value="财务科"></mt-cell>
          <mt-cell title="发文时间" value="2019-7-19"></mt-cell>
          <div class="button" @click="toPath('/officialDocumentDetail')">查看详情</div>
        </div>
        <div class="item" >
          <div class="title"><i></i>关于印发《关于公证服务银行业金融改革创新防范金融风险的指导意见》的通知</div>
          <mt-cell title="发文单位" value="财务科"></mt-cell>
          <mt-cell title="发文时间" value="2019-7-19"></mt-cell>
          <div class="button" @click="toPath('/officialDocumentDetail')">查看详情</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        keyword:'',
        listH:0
      };
    },
    methods: {
      toPath(val){
        this.$router.push(val)
      }
    },
    mounted(){

      this.listH = document.body.clientHeight - 45 ;

    }

  }

</script>

<style lang="scss">
  .officialDocument {
    .content {
      overflow: scroll;
      .mint-search{
        height: auto;
      }
      .mint-field{
        .mint-field-core{
          text-align: left;
        }
      }
      position: relative;
      .recordList {
        height: 1130px;
        overflow-y: scroll;
        .item {
          background: #fff;
          width: 90%;
          margin-left: 5%;
          border-radius: 10px; /*no*/
          border: 1px solid #494a41; /*no*/
          margin-top: 30px;
          overflow: hidden;
          .title {
            min-height: 90px;
            line-height: 90px;
            font-size: 14px; /*no*/
            padding-left: 10px; /*no*/
            i {
              display: inline-block;
              width: 60px;
              height: 60px;
              vertical-align: middle;
              margin-right: 10px;
              background: url(../../../static/img/gongwen.png) no-repeat;
              background-size: 60px 60px;
            }
          }
          .button {
            text-align: center;
            height: 80px;
            line-height: 80px;
            padding: 0 10px; /*no*/
            border-top: 1px solid #ccc; /*no*/
            font-size: 14px; /*no*/
          }
          .mint-cell {
            min-height: 30px; /*no*/
            .mint-cell-text {
              font-size: 12px; /*no*/
            }
            .mint-cell-value {
              font-size: 12px; /*no*/
            }

          }

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
