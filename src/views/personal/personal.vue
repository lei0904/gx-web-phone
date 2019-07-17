<template>
  <div id="personal">

    <mt-header fixed title="个人">
      <router-link to="/workbench" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <v-menu :checked="4"></v-menu>
  </div>
</template>

<script>
  import Menu from '../../components/menu/menu.vue'
  export default {
    name: "message.vue",
    components: {
      "v-menu": Menu
    },
  }
</script>

<style scoped>

</style>
