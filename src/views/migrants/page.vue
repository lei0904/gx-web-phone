<template>
  <div id="external_traffic">
    <mt-header fixed title="外来人员">
      <router-link to="/nav" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right" @click.native="toAdd" v-show="active == '1'">添加</mt-button>
    </mt-header>

    <div class="content-nav-wrapper">
      <div class="content nav">
        <div class="nav_item" :class="active == '1'?'active':''" @click="$router.push('/migrants_mine_page')">我的</div>
        <div class="nav_item" :class="active == '2'?'active':''" @click="$router.push('/migrants_audit_page')">审批</div>
        <div class="nav_item" :class="active == '3'?'active':''" @click="$router.push('/migrants_done_page')">已办</div>
      </div>
    </div>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style lang="scss">
  @import '../../styles/style.scss';

  #external_traffic .page-container {
    background: red;
    height: 100vh;
    padding-top: 160px;
    box-sizing: border-box;
    position: relative;
  }

  .content-nav-wrapper {
    /*padding-bottom: 20px;*/
  }
  .content.nav{
    height: 70px;
    display: flex;
    background: #ffffff;
    border-bottom: 1px solid #ccc; /*no*/
    .nav_item {
      height: 70px;
      line-height: 70px;
      flex: 1;
      text-align: center;
      font-size: 30px; /*px*/
      font-weight: 400;
      color: #333333;
    }
    .nav_item.active {
      color: #3190e8;
    }
  }
</style>

<script>
  export default {
    name: 'Migrants',

    watch: {
      '$route'(v) {
        let path = v.path;
        this.setActive(path)
      }
    },

    methods: {
      toAdd() {
        this.$router.push('/migrants_item');
      },
      setActive(path) {
        if (path.indexOf('migrants_mine_page') > -1) {
          this.active = '1'
        } else if (path.indexOf('migrants_audit_page') > -1) {
          this.active = '2'
        } else if (path.indexOf('migrants_done_page') > -1) {
          this.active = '3'
        }
      }
    },

    activated() {
      let path = this.$route.path;
      this.setActive(path)
    },

    data(){
      return {
        active: '1'
      }
    }
  }
</script>
