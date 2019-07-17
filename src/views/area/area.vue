<template>
  <div class="area">
    <mt-header fixed title="选择区域">
      <mt-button slot="left" icon="back" @click.native="$router.back()"></mt-button>
      <mt-button slot="right" @click.native="submit">完成</mt-button>
    </mt-header>

    <div class="area-content">
      <div class="area-left">
        <div class="area-item"
             @click="areaSelect(item)"
             v-for="item in areas"
             :class="isSelected(item) != -1 ? 'selected' : ''">{{item.NAME}}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .area {
    padding-top: 90px;
    height: 100vh;
    overflow: hidden;
    .area-content {
      height: 100%;
      display: flex;
      .area-left {
        flex: 2;
        overflow-y: auto;
        border-right: 1px solid #ccc;
        -webkit-overflow-scrolling:touch;
      }
      .area-right {
        flex: 3;
        overflow-y: auto;
        -webkit-overflow-scrolling:touch;
      }
      .area-item {
        position: relative;
        height: 90px;
        line-height: 90px;
        color: #333;
        font-size: 28px;
        padding-left: 30px;
      }
      .area-item::after {
        content: '';
        position: absolute;
        height: 1px; /*no*/
        bottom: 0;
        left: 0px;
        width: 100%;
        border-bottom: 1px solid #ccc; /*no*/
        transform-origin: 0 0;
        transform: scale(1, 0.5);
        box-sizing: border-box;
      }
      .area-item:last-child::after {
        display: none;
      }
      .area-item.selected {
        background: rgba(255,255,224,.4);
      }
    }
  }
</style>

<script type="text/javascript">
  import {mapState, mapActions, mapGetters} from 'vuex'
  import {getArea} from '../../service/index'

  export default {
    name: 'AppArea',
    data() {
      return {
        areas: [],
        type: 0,
        selected: []
      }
    },
    computed: {
      ...mapState({
        selectAreas: state => state.Area.selectAreas,
      })
    },
    mounted() {
      this.type = this.$route.params['type'];
      this.areas = this.getAreasByType()(this.type);

      if (!this.areas || this.areas.length === 0) { //没有加载过 区域信息
        getArea({flowtype: this.type}).then((rets) => {
          if (rets['status'] == 1) {
            this.areas = rets['data'];
            this.saveAreasByType({
              'type': this.type,
              'areas': this.areas
            })
          } else {
            this.$toast(rets['msg'] || '请求失败')
          }
        });
      }
    },
    methods: {
      ...mapGetters([
        'getAreasByType',
      ]),
      ...mapActions([
        'saveAreasByType'
      ]),
      submit() {
        if (!this.selectAreas || this.selectAreas.length === 0) {
          this.$toast('请选择区域');
          return;
        }
        this.$router.back();
      },
      isSelected(item) {
        for (let idx = 0, len = this.selectAreas.length; idx < len; idx++) {
          let area = this.selectAreas[idx];
          if (area['KEY'] == item['KEY']) {
            return idx;
          }
        }
        return -1;
      },
      areaSelect(i) {
        let idx = this.isSelected(i);
        if (idx != -1) {
          this.selectAreas.splice(idx, 1);
        } else {
          this.selectAreas.push(i);
        }
      },
    }
  }
</script>
