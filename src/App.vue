<template>
  <Scrollbar width="100px"
             height="100px">
    <img alt="Vue logo"
         src="./assets/logo.png">
  </Scrollbar>
</template>

<script>
import Scrollbar from './Scrollbar/Index.vue';

export default {
  components: {
    Scrollbar,
  },
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
