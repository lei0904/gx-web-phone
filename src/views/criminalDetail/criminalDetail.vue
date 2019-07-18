<template>
  <div id="criminalDetail">
    <mt-header fixed title="个人信息">
      <router-link to="/criminalRecord" slot="left">
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
          <div class="info-item">{{criminalInfo.jy}} {{criminalInfo.jq}}</div>
        </div>
      </div>
      <mt-cell title="个人动态" label="个人动态"  to="/criminalDynamic" is-link></mt-cell>
      <mt-cell title="技能指导" label="技能指导"  to="/criminalnstructor" is-link></mt-cell>
      <mt-cell title="健康信息" label="监外就诊、监外住院、门诊记录、罪犯体验"  @click.native="sheetVisible = true"  is-link></mt-cell>
      <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
      <mt-cell title="教育改造" label="个别谈话教育、三科学习成绩"  @click.native="sheetVisible2 = true" is-link></mt-cell>
      <mt-actionsheet :actions="actions2" v-model="sheetVisible2"></mt-actionsheet>
      <mt-actionsheet :actions="actions3" v-model="sheetVisible3"></mt-actionsheet>
      <mt-cell title="狱政管理" label="会见管理、计分考核、亲情电话、日常评估"  @click.native="sheetVisible3 = true" is-link></mt-cell>

    </div>

  </div>
</template>

<script>

  import {mapGetters, mapActions, mapState} from 'vuex'

  export default {
    name: "criminalDetail",
    data(){
      return {
        criminalInfo:{},
        actions:[
          {
            name: '监外就诊',
            id: 1,
            method: this.changePage
          },
          {
            name: '监外住院',
            id: 2,
            method: this.changePage
          },
          {
            name: '门诊记录',
            id: 3,
            method: this.changePage
          },
          {
            name: '罪犯体验',
            id: 4,
            method: this.changePage
          }
        ],
        actions2:[
          {
            name: '个别谈话教育',
            id: 1,
            method: this.changePage2
          },

          {
            name: '三科学习成绩',
            id: 2,
            method: this.changePage2
          }
        ],
        actions3:[
          {
            name: '会见管理',
            id: 1,
            method: this.changePage3
          },
          {
          name: '计分考核',
          id: 2,
          method: this.changePage3
          },
          {
            name: '亲情电话',
            id: 3,
            method: this.changePage3
          },
          {
            name: '日常评估',
            id: 4,
            method: this.changePage3
          },
        ],
        sheetVisible:false,
        sheetVisible2:false,
        sheetVisible3:false,
      }
    },
    created(){
     this.criminalInfo = this.$store.getters.getCriminal();
      console.log('criminalInfo---->',this.criminalInfo)
    },
    methods:{
      ...mapActions([
        'setNeedRefresh',
        'setPageIds'
      ]),
      changePage(o){
          this.$router.push({path:'/criminalTreatment'});
          this.setPageIds(o.id)
      },
      changePage2(o){
        this.$router.push({path:'/criminalEducation'});
        this.setPageIds(o.id)
      },
      changePage3(o){
        this.$router.push({path:'/penologicalManage'});
        this.setPageIds(o.id)
      }
    }

  }
</script>

<style lang="scss">
  #criminalDetail{
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
    .mint-actionsheet-listitem, .mint-actionsheet-button{
      text-align: center;
    }
  }

</style>
