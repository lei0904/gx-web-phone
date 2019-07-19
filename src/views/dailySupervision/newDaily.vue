<template>
  <div class="new-daily">
    <mt-header fixed title="新建日常检查">
      <router-link to="/dailyExamine" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <div class="form">
        <mt-cell title="选择检查地点"  :value="form.person" @click.native="openPerson" is-link></mt-cell>
        <mt-cell title="选择检查分类" :value="form.typeText" @click.native="openType"  is-link></mt-cell>
        <mt-cell title="检查时间 "  :value="form.timeValue" @click.native="openTimePicker"  is-link></mt-cell>
        <div class="photo-content">
          <div class="photo-title">拍照凭证</div>
          <div class="photo">
            <div class="photo-img" v-for="(item,idx) in imgList" @click="clearImg(idx)">
              <img :src="item.src" >
              <p class="clear-img"></p>
            </div>
            <p class="photo-bg" @click="takePhoto"></p>
          </div>
        </div>
        <mt-cell title="民警签字" value="已签字"  is-link></mt-cell>
      </div>
      <mt-button class="normal-button" size="large" type="primary" @click="subForm">提交申请</mt-button>
    </div>
    <v-picker
      :values="personArr"
      :showKey="'value'"
      ref="personPicker"
      @confirm="personChange"
    >
    </v-picker>
    <v-picker
      :values="typeArr"
      :showKey="'value'"
      ref="typePicker"
      @confirm="typeChange"
    >
    </v-picker>

    <v-picker
      :values="typeArr"
      :showKey="'value'"
      ref="typePicker"
      @confirm="typeChange"
    >
    </v-picker>

    <v-picker
      :values="normArr"
      :showKey="'value'"
      ref="normPicker"
      @confirm="normChange"
    >
    </v-picker>

    <v-picker
      :values="clauseArr"
      :showKey="'value'"
      ref="clausePicker"
      @confirm="clauseChange"
    >
    </v-picker>

    <mt-datetime-picker
      ref="timePicker"
      @confirm="timeChange"
      :startDate="nowDate">
    </mt-datetime-picker>
  </div>
</template>

<script>
  import dataPicker from '../../components/data-picker/data-picker.vue'
  import Moment from 'moment'
  export default {
    name: "newCheck",
    components:{
      'v-picker':dataPicker
    },
    data(){
      return {
        sheetVisible:false,
        nowDate: new Date(),
        form:{
          timeValue: '',
          introduction:'',
          add:'',
          score:'',
          person:'',
          personCode:'',
          typeText:'',
          typeCode:'',
          norm:'',
          clause:''
        },
        actions:[
          {
            name: '监房',
            id: 1,
            method: this.changeType
          },
          {
            name: '厂区',
            id: 2,
            method: this.changeType
          },
          {
            name: '监舍',
            id: 3,
            method: this.changeType
          },
        ],
        personArr:[
          {
            value:'监房',
            code:'0001'
          },
          {
            value:'厂区',
            code:'0002'
          },
          {
            value:'车间',
            code:'0003'
          },
        ],
        typeArr:[
          {
            value:'工间检查',
            code:'1'
          },
          {
            value:'收工回查',
            code:'2'
          }

        ],
        normArr:[
          {
            value:'生活卫生规范',
            code:'3'
          },
          {
            value:'文明礼貌规范',
            code:'4'
          },
          {
            value:'劳动规范',
            code:'5'
          },
        ],
        clauseArr:[
          {
            value:'第一条第1款',
            code:'1'
          },
          {
            value:'第一条第2款',
            code:'1'
          },
          {
            value:'第一条第3款',
            code:'1'
          },
          {
            value:'第一条第4款',
            code:'1'
          },
          {
            value:'第一条第5款',
            code:'1'
          },


        ],
        imgList:[
          {
            id:'1',
            src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563529888813&di=fe9f9654bf296b39c717dac139ca09e3&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201512%2F12%2F20151212193107_ujGZV.jpeg"
          },
          {
            id:'2',
            src:"https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1563520643&di=63fabd0dc73a18049fe1429aac5347e8&src=http://img2.ph.126.net/8Y1u9aYRhqT4KHumTO_y1w==/6619210632305894354.jpg"
          },
          {
            id:'3',
            src:"https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1563520690&di=dbe773d87eea1887224433bc8bcfd4e2&src=http://pic.nipic.com/2008-06-13/2008613104551168_2.jpg"
          },
        ]

      }
    },
    methods:{
      changeType(o){
        console.log("o---->",o)
      },
      subForm(){
        let ths = this;
        ths.$mint.MessageBox.confirm("确认提交执勤记录?",'提示').then(()=>{
          ths.$router.push({'path':'/dailySupervision'})
        })
      },
      openPerson(){
        this.$refs.personPicker.open();
      },
      openType(){
        this.$refs.typePicker.open();
      },
      typeChange(v){
        this.form.typeText = v.value;
        this.form.typeCode = v.code;

      },
      personChange(v){
        this.form.person = v.value;
        this.form.personCode = v.code
      },
      openTimePicker(){
        this.$refs.timePicker.open();
      },
      timeChange(value){
        this.form.timeValue = Moment(value).format('YYYY-MM-DD HH:mm');
        this.form.timeValues = Moment(value).format('YYYY-MM-DD HH:mm:ss')
      },
      openNorm(){
        this.$refs.normPicker.open();
      },
      normChange(v){
        this.form.norm = v.value;

      },
      openClause(){
        this.$refs.clausePicker.open();
      },
      clauseChange(v){
        this.form.clause = v.value;
      },
      takePhoto(){
        console.log("takephoto---->")
      },
      clearImg(idx){
        this.$mint.MessageBox.confirm('确认删除此凭证?','系统提示').then(()=>{
          this.imgList.splice(idx,1)
        })
      }


    },
    mounted(){

    }
  }
</script>

<style lang="scss">


  .new-daily{
    .mint-actionsheet-list{
      text-align: center;
    }
    .normal-button {
      width: 90%;
      margin-left: 5%;
      margin-top: 35px;
    }
    .form{
      .photo-content{
        border-top: 1px solid #d9d9d9;/*no*/
        min-height: 320px;
        margin-left:20px;
        padding-right: 20px;
        .photo-title{
          vertical-align: middle;
          color: #136dc5;
          text-align: center;
          padding: 20px;
          font-size: 18px;/*no*/
          font-weight: 400;
        }
        .photo{
          display: flex;
          .photo-img{
            position: relative;
            margin-right: 20px;
            img{
              width: 220px;
              height: 220px;
              border-radius: 5px;
            }
            .clear-img{
              background: url("../../../static/img/icon-clear.png") no-repeat;
              background-size: 100% 100%;
              right: -20px;
              top:-20px;
              color: #fff;
              border-radius: 50%;
              width: 60px;
              height: 60px;
              position: absolute;
            }
          }
          .photo-bg{
            background: url("../../../static/img/photo-bg.png") no-repeat;
            background-size: 100% 100%;
            width: 220px;
            height: 220px;
          }
        }
      }
    }
  }

</style>
