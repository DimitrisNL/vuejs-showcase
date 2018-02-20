<script>
import TheHeader from 'components/layout/TheHeader';

export default {
  name: 'App',
  components: { TheHeader },
};
</script>

<template>
  <div id="app">
    <TheHeader />
    <div class='content p-4'>
      <router-view></router-view>
    </div>
    <notifications class='toastr-style' :duration='1500'/>
  </div>
</template>

<style lang="scss">
@import './styles/main.scss';

#app {
  background: $porcelain;
  color: $shark;

  .content {
    height: 94vh;
  }
}
</style>
