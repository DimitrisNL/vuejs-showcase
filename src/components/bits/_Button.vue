<script>
export default {
  name: 'Button',
  props: ['label', 'theme', 'onClick'],
  methods: {
    handleClick() {
      this.$emit('onClick');
    },
  },
};
</script>

<template>

  <button
    class='button pt-3 pb-3 pl-4 pr-4'
    :class='theme'
    @click='handleClick'
  >
    <slot></slot>
    {{label}}
  </button>

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
    &:active {
      background: darken($blue_lagoon, 10%);
    }
  }
  &.neutral {
    &:hover {
      background: darken(#fff, 5%);
    }
    &:active {
      background: darken(#fff, 10%);
    }
  }
  &.danger {
    background: $mexican_red;
    color: #fff;
    &:hover {
      background: darken($mexican_red, 5%);
    }
    &:active {
      background: darken($mexican_red, 10%);
    }
  }
}
</style>
