<template>
  <div id="setting">
    <mt-header fixed title="库存查询">
      <router-link to="/toolsManage" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <mt-cell title="类别" is-link @click.native="sheetVisible = true"
               :value="type"></mt-cell>
      <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
      <div class="list">
        <mt-cell :title="type + '-' +item.name" v-for="(item,index) in toolsData" :key="index">
          <span>剩余：{{item.remains}}</span>
          <div slot="icon" class="icon" :class="'icon_' + id"  width="24" height="24"></div>
        </mt-cell>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        type: '',
        sheetVisible: false,
        actions: [],
        toolsData:[],
        id:''
      };
    },
    methods: {
      changeType(val){
        this.type = val.name;
        this.id = val.id;
        this.getToolsData(val.id)
      },
      getToolsData(id){
        let _this = this
        if (id === 1) {
          _this.toolsData = [
            {
              name: '锤子',
              remains:20
            },
            {
              name: '铁锹',
              remains:20
            },
            {
              name: '斧头',
              remains:20
            },
            {
              name: '铁锹',
              remains:20
            },
            {
              name: '斧头',
              remains:20
            },
            {
              name: '铁锹',
              remains:20
            },
            {
              name: '斧头',
              remains:20
            },
            {
              name: '铁锹',
              remains:20
            },
            {
              name: '斧头',
              remains:20
            },
            {
              name: '铁锹',
              remains:20
            },
            {
              name: '斧头',
              remains:20
            },
            {
              name: '铁锹',
              remains:20
            },
            {
              name: '斧头',
              remains:20
            },
            {
              name: '铁锹',
              remains:20
            },
            {
              name: '斧头',
              remains:20
            },
            {
              name: '铁锹',
              remains:20
            },
            {
              name: '斧头',
              remains:20
            },
            {
              name: '铁锹',
              remains:20
            },
            {
              name: '斧头',
              remains:20
            },
            {
              name: '铁锹',
              remains:20
            },
            {
              name: '斧头',
              remains:20
            }

          ]
        }else if(id === 2){
          _this.toolsData = [
            {
              name: '剪刀',
              remains:20
            },
            {
              name: '扳手',
              remains:20
            }
          ]
        }
      }
    },
    mounted() {
      this.actions = [
        {
          name: '危险工具',
          id: 1,
          method: this.changeType
        },
        {
          name: '常用工具',
          id: 2,
          method: this.changeType
        }
      ];
      this.type = this.actions[0].name;
      this.id = this.actions[0].id;
      this.getToolsData(this.id);
    }
  }

</script>

<style lang="scss">
  #setting {
    background: #f0f0f4;
    min-height: 100vh;
    .mint-actionsheet-listitem {
      text-align: center;
    }
    .mint-actionsheet-list {
      max-height: 800px;
      overflow-y: scroll;
    }
    .content {
      .list {
        height: 1100px;
        overflow-y: scroll;
        margin-top: 50px;
        .icon{
          display: inline-block;
          width: 40px;
          height: 40px;
          vertical-align: middle;
        }
        .icon_1{
          background: url(../../../static/img/icon_tools1.png) no-repeat;
          background-size: 40px 40px;
        }
        .icon_2{
          background: url(../../../static/img/icon_tools.png) no-repeat;
          background-size: 40px 40px;
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
