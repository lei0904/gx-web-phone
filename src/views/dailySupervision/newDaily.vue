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
        <mt-cell title="民警签字" :value="form.isSignature"  is-link @click.native="signature"> </mt-cell>
        <div class="signature" v-show = 'form.isSignature == "已签字"'>
          <img :src="form.signatureSrc" alt="">
        </div>
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
          clause:'',
          isSignature:'未签字',
          signatureSrc:''
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
        imgList:[]

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
        let ths = this;
        ths.$ces.Plugins.Camera.take(function(rets){
          console.log('--->rets',rets);
          if (rets.status === 1) {
            let data =rets.data;
            let obj={
              src:'data:image/jpg;base64,'+data.thumbnail
            };
            ths.imgList.push(obj);
          }else{
            ths.$toast('调用拍照失败')
          }
        })
      },
      clearImg(idx){
        this.$mint.MessageBox.confirm('确认删除此凭证?','系统提示').then(()=>{
          this.imgList.splice(idx,1)
        })
      },
      signature(){
        let ths = this;
        ths.$ces.Plugins.SignName.take((rets)=>{
          console.log(rets)
          let data = rets.data;
          if(rets.status == 1){
            ths.form.isSignature ='已签字';
            ths.form.signatureSrc  ='data:image/jpg;base64,'+data
          }
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
      .signature{
        width: 400px;
        height: 200px;
        margin: 40px auto;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }

</style>
