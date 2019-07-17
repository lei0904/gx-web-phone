<template>
  <div class="person">
    <mt-header fixed title="添加人员">
      <mt-button icon="back" slot="left" @click.native="$router.back()"></mt-button>
      <mt-button slot="right" @click.native="submit">完成</mt-button>
    </mt-header>

    <mt-field label="姓名" v-model="name" placeholder="请输入姓名"></mt-field>
    <mt-field label="身份证" v-model="id_card" placeholder="输入身份证">
      <mt-button plain size="small" type="primary" @click.native="ocr">读取身份证</mt-button>
    </mt-field>
  </div>
</template>

<style lang="scss">
  .person {
    padding-top: 90px;
    .mint-field-core {
      text-align: left;
    }
  }
</style>

<script type="text/javascript">
  import {mapActions} from 'vuex'

  export default {
    name: 'Person',
    data() {
      return {
        name: '',
        id_card: ''
      }
    },
    methods: {
      ...mapActions([
        'addOutsider'
      ]),
      submit() {
        if(!this.name || !this.id_card) {
          this.$toast('请添加外来人员');
          return;
        }
        this.addOutsider({
          wlryxm: this.name,
          wlrysfzh: this.id_card
        });
        this.$router.back();
      },
      ocr() {
        let _this = this;
        if (this.$ces.Config.plugin) {
          this.$ces.JSBridge.callHandler('ocr', [0], function (rets) {
            if (rets['status'] == 1) {
              let data = rets['data'] || {};
              let idNumber = data['idNumber'] || {};
              let name = data['name'] || {};

              _this.name = name['words'] || '';
              _this.id_card = idNumber['words'] || '';
            } else {
              this.$toast('读取身份证失败');
            }
          });
        } else {
          this.$toast('不用读取身份证，模拟数据');
          _this.name = '张三';
          _this.id_card = '1234567890';
        }
      }
    }
  }
</script>
