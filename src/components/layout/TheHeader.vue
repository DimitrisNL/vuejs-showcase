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
  <header class='header flex align-center pt-3 pb-3 pl-5 pr-5'>
    <h1 class='mr-6'>BriteCore</h1>
    <ul class='header-menu flex'>
      <router-link
        class='menu-item pt-2 pb-2 pl-3 pr-3 mr-2 ml-2'
        tag="li"
        v-for='route in routes'
        :key='route.key'
        :to='route.path'
        exact>
        <a>
          <i :class="`fa fa-${route.icon} mr-2`"></i>
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

  .header-menu {
    list-style: none;
    margin: 0;
    padding: 0;

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
