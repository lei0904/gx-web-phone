<template>
  <div id="setting">
    <mt-header fixed title="被服配置">
      <router-link to="/clothingmanage" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <mt-cell title="类别" is-link @click.native="sheetVisible = true"
               :value="type"></mt-cell>
      <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
      <div class="list">
        <div class="item" v-for="(item ,index) in clothData">
          <div class="title"><i :class="'icon_' + id"></i>{{item.name}}</div>
          <mt-cell title="新犯发放数" :value="item.newNum"></mt-cell>
          <mt-cell title="标准发放数" :value="item.standardNum"></mt-cell>
          <mt-cell title="使用年限" :value="item.limit + '年'"></mt-cell>
        </div>
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
        clothData:[]
      };
    },
    methods: {
      changeType(val){
        this.type = val.name;
        this.id = val.id;
        this.getClothData(val.id)
      },
      getClothData(id){
        let _this = this
        if (id === 1) {
          _this.clothData = [
            {
              name: '床单',
              newNum: 2,
              standardNum: 1,
              limit:2
            },
            {
              name: '被套',
              newNum: 2,
              standardNum: 1,
              limit:1
            },
            {
              name: '枕头',
              newNum: 2,
              standardNum: 1,
              limit:3
            },
            {
              name: '枕巾',
              newNum: 4,
              standardNum: 2,
              limit:1
            }
          ]
        }else if(id === 2){
          _this.clothData = [
            {
              name: '工作帽',
              newNum: 2,
              standardNum: 1,
              limit:2
            },
            {
              name: '安全帽',
              newNum: 2,
              standardNum: 1,
              limit:1
            }
          ]
        }else if(id === 3){
          _this.clothData = [
            {
              name: '工作靴',
              newNum: 2,
              standardNum: 1,
              limit:2
            },
            {
              name: '拖鞋',
              newNum: 2,
              standardNum: 1,
              limit:1
            },
            {
              name: '休闲鞋',
              newNum: 2,
              standardNum: 1,
              limit:1
            }
          ]
        }else if(id === 4){
          _this.clothData = [
            {
              name: '夏季外衣裤',
              newNum: 2,
              standardNum: 1,
              limit:2
            },
            {
              name: '春季外衣裤',
              newNum: 2,
              standardNum: 1,
              limit:1
            },
            {
              name: '冬季外衣裤',
              newNum: 2,
              standardNum: 1,
              limit:3
            },
            {
              name: '内衣',
              newNum: 4,
              standardNum: 2,
              limit:1
            },
            {
              name: '工作服',
              newNum: 2,
              standardNum: 1,
              limit:2
            }
          ]
        }
      }
    },
    mounted() {
      this.actions = [
        {
          name: '床上用品',
          id: 1,
          method: this.changeType
        },
        {
          name: '帽类',
          id: 2,
          method: this.changeType
        },
        {
          name: '鞋类',
          id: 3,
          method: this.changeType
        },
        {
          name: '服装',
          id: 4,
          method: this.changeType
        }
      ];
      this.type = this.actions[0].name;
      this.id = this.actions[0].id;
      this.getClothData(this.id);
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
        height: 1150px;
        overflow-y: scroll;
        .item {
          background: #fff;
          width: 90%;
          margin-left: 5%;
          border-radius: 10px; /*no*/
          margin-top: 30px;
          overflow: hidden;
          .title {
            height: 90px;
            line-height: 90px;
            font-size: 14px; /*no*/
            text-indent: 10px; /*no*/
            i{
              display: inline-block;
              width: 60px;
              height: 60px;
              vertical-align: middle;
              margin-right: 10px;
            }
            .icon_1{
              background: url(../../../static/img/icon_bedclothes.png) no-repeat;
              background-size: 60px 60px;
            }
            .icon_2{
              background: url(../../../static/img/icon_hat.png) no-repeat;
              background-size: 60px 60px;
            }
            .icon_3{
              background: url(../../../static/img/icon_shoes.png) no-repeat;
              background-size: 60px 60px;
            }
            .icon_4{
              background: url(../../../static/img/icon_clothing.png) no-repeat;
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
        .item:last-child{
          margin-bottom: 100px;
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
