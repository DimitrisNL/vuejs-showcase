<script>
export default {
  name: 'Button',
  props: ['label', 'theme'],
};
</script>

<template>

  <button class='button pt-3 pb-3 pl-4 pr-4' :class='theme'>{{label}}</button>

</template>


<style lang="scss" scoped>
.button {
  background: #fff;
  border-radius: $border-radius;
  box-shadow: none;
  border: 1px solid $granny_smith;
  cursor: pointer;
  outline: none;
  transition: all $base-transition;

  + button {
    margin-left: 2rem;
  }

  &.success {
    background: $blue_lagoon;
    color: #fff;
    &:hover {
      background: darken($blue_lagoon, 5%);
    }
  }
  &.neutral {
    &:hover {
      background: darken(#fff, 5%);
    }
  }
  &.danger {
    background: $mexican_red;
    color: #fff;
    &:hover {
      background: darken($mexican_red, 5%);
    }
  }
}
</style>
