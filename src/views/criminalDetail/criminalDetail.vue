<template>
  <div id="personal">
    <mt-header fixed title="个人">
      <router-link to="/bussiness" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="content">
      <div class="criminal-content">
        <div class="avator">
          <img src="../../../static/img/icon-avator.jpeg" alt="">
        </div>
        <div class="criminal-info">
          <div class="info-item"><span class="name">{{criminalInfo.name}} </span>( {{criminalInfo.bh}} )</div>
          <div class="info-item">{{criminalInfo.yx}}</div>
          <div class="info-item">{{criminalInfo.jy}}-{{criminalInfo.jq}}</div>
        </div>
      </div>
      <mt-cell title="个人动态" label="个人动态"  to="" is-link></mt-cell>
      <mt-cell title="技能指导" label="技能指导"  to="" is-link></mt-cell>
      <mt-cell title="健康信息" label="健康信息"  to="" is-link></mt-cell>
      <mt-cell title="教育改造" label="教育改造"  to="" is-link></mt-cell>
      <mt-cell title="狱政管理" label="狱政管理"  to="" is-link></mt-cell>

    </div>

  </div>
</template>

<script>

  import {mapGetters, mapActions, mapState} from 'vuex'

  export default {
    name: "criminalDetail",
    data(){
      return {
        criminalInfo:{}
      }
    },
    created(){
     this.criminalInfo = this.$store.getters.getCriminal();
      console.log('criminalInfo---->',this.criminalInfo)
    },
    methods:{}

  }
</script>

<style lang="scss">
  #personal{
    .content{
      .criminal-content{
        height: 200px;
        margin: 20px 40px;
        padding: 20px 10px;
        display: flex;
        .avator{
            width: 110px;
            height: 110px;
          img{
            border-radius: 50%;
            width: 100%;
            height: 100%;
          }
        }
        .criminal-info{
          height: 200px;
          margin-left: 40px;
          .info-item{
            margin-bottom: 15px;
            .name{
              font-size: 18px;/*no*/
            }
          }
        }
      }
    }
  }

</style>
