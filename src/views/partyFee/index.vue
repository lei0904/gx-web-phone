<template>
  <div id="partyFee">
    <mt-header fixed title="党建收费">
      <mt-button icon="back" slot="left" @click="$router.back()"></mt-button>
    </mt-header>
    <div class="content">
      <div class="line">
        <div class="list">
          <div v-for="(item,index) in list">
            <mt-cell :title="item.title"   :value="item.fee"></mt-cell>
            <mt-cell title=""   :value="item.status"></mt-cell>
          </div>

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
  #bluetoothSynch{
    background: #f0f0f4;
    min-height: 100vh;
    .content{
      .line{
        margin-bottom: 20px;
        .title{
          background: #fff;
          height: 80px;
          line-height: 80px;
          font-size: 18px;/*no*/
          padding: 0 10px;/*no*/
        }
        .list{
          text-indent: 30px;
          height: 750px;
          overflow-y: scroll;
          .mint-cell-value{
            font-size: 13px;/*no*/
          }
        }
        .normal-button{
          width: 90%;
          margin-left: 5%;
          margin-top: 35px;
        }
      }
    }
  }
</style>
