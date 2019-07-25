<template>
  <div class="new-log">
    <mt-header fixed title="新建执勤记录">
      <router-link to="/logExamine" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content"  :style="{height:listH+'px'}">
      <div class="form">
        <mt-cell title="选择事件地点"  :value="form.person" @click.native="openPerson" is-link></mt-cell>
        <mt-cell title="选择事件罪犯" :value="form.typeText" @click.native="openType"  is-link></mt-cell>
        <mt-cell title="选择执勤类别一" :value="form.norm" @click.native="openNorm" is-link></mt-cell>
        <mt-cell title="选择执勤类别二" :value="form.clause" @click.native="openClause"  is-link></mt-cell>
        <mt-cell title="事件时间 "  :value="form.timeValue" @click.native="openTimePicker"  is-link></mt-cell>
        <mt-field label="事件描述"  placeholder="事件描述" type="textarea" rows="4" v-model="form.introduction"></mt-field>

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
        listH:0,
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
            value:'钱八',
            code:'1'
          },
          {
            value:'张宝',
            code:'2'
          },
          {
            value:'王五',
            code:'2'
          }

        ],
        normArr:[
          {
            value:'检查巡视',
            code:'3'
          }
        ],
        clauseArr:[
          {
            value:'其他检查巡视',
            code:'1'
          }]

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

      this.listH = document.body.clientHeight  -45 ;
    }
  }
</script>

<style lang="scss">

  .new-log{
    .content{
      overflow: scroll;
    .mint-actionsheet-list{
      text-align: center;
    }
    .normal-button {
      width: 90%;
      margin-left: 5%;
      margin-top: 35px;
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
