<template>
  <div id="app">
    <transition :name="animate" mode="out-in">
      <keep-alive :include="includeKeepAlive">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>

  import Menu from './components/menu/menu.vue'
export default {
  name: 'App',
  components: {
    "v-menu": Menu
  },
  data() {
    return {
      animate: "left-fade",
      includeKeepAlive: ['Migrants', 'MigrantsInfo']
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(to.meta.value,from.meta.value)
      if (to.meta.value === from.meta.value) {
        this.animate = "fade";
      } else if(to.meta.value > from.meta.value){
        this.animate = "left-fade";
      } else {
        this.animate = "right-fade";
      }
    }
  }
}
</script>

<style lang="scss">
@import "styles/style.scss";

#app {
  width: 100%;
  height: 100vh;
  background: #fff;
  overflow: hidden;
  .mint-header{
    background-color: #136dc5;
  }
  .mint-header-title{
    overflow: visible;
  }
}
</style>
