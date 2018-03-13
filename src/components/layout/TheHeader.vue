<script>
import routes from 'containers/routes';

export default {
  name: 'TheHeader',
  data() {
    return {
      routes,
    };
  },
};
</script>

<template>
  <header class='header d-flex align-items-center py-2 px-4'>
    <h1 class='mr-5'>The Company</h1>
    <ul class='header-menu p-0 m-0 d-flex'>
      <router-link
        class='menu-item px-2 py-1 mr-2'
        tag="li"
        v-for='route in routes'
        :key='route.key'
        :to='route.path'
        exact>
        <a>
          <i :class="`fa fa-${route.icon} mr-1`"></i>
          {{route.name}}
        </a>
      </router-link>
    </ul>
  </header>
</template>


<style lang="scss" scoped>
.header {
  background: $elephant;
  color: #fff;
  height: 6vh;

  .header-menu {
    list-style: none;

    .menu-item {
      border-radius: $border-radius;
      font-size: 95%;
      transition: all $base-transition;

      &:hover,
      &.router-link-active {
        background: lighten($elephant, 5%);
      }

      .fa {
        opacity: 0.6;
      }
    }
  }
}
</style>
