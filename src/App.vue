<template>
  <div id="app">
    <TheHeader />
    <div class='content'>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheHeader from 'components/layout/TheHeader';

export default {
  name: 'App',
  components: { TheHeader },
};
</script>

<style lang="scss">
@import './styles/main.scss';

#app {
  background: $porcelain;
  color: #2c3e50;

  // height: 100vh;
  // overflow: hidden;
  // display: flex;
  // flex-direction: column;

  .content {
    height: 94vh;
  }
}
</style>
