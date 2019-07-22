<template>
  <div id="partyFee">
    <mt-header fixed title="党建收费">
      <mt-button icon="back" slot="left" @click="$router.back()"></mt-button>
    </mt-header>
    <div class="content">
          <div class="list" v-for="(item,index) in list">
            <div class="item">
              <div class="info title">
                {{item.title}}
              </div>
              <div>{{item.fee}}</div>
            </div>
            <div class="tips">
              <div class="is-pay">{{item.status}}</div>
            </div>
          </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        list:[{title:"2019年一季度",fee:'¥150',status:'未交'},
          {title:"2018年四季度",fee:'¥150',status:'已交'},
          {title:"2018年三季度",fee:'¥150',status:'已交'},
          {title:"2018年二季度",fee:'¥150',status:'已交'},
          {title:"2018年一季度",fee:'¥150',status:'已交'},
          {title:"2017年四季度",fee:'¥150',status:'已交'}]
      };
    },
    methods: {}
  }

</script>

<style lang="scss">
  #partyFee{
    background: #f0f0f4;
    min-height: 100vh;
    .content{
      .list{
        background: #fff;
        margin: 20px 10px 20px;
        border-radius: 20px;
        padding: 20px;
        .item{
          display: flex;
          font-size: 14px;/*no*/
          justify-content: space-between;
          margin-bottom: 20px;
          .title{
            font-size: 16px;/*no*/
          }
          .info{
            flex: 1;
          }
        }
        .tips{
          .is-pay{
            justify-content: flex-end;
            color: #FF4949;
            text-align: right;
          }
        }
      }
    }
  }
</style>
