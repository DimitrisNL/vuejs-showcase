<script>
export default {
  name: 'Button',
  props: {
    theme: {
      type: String,
      default: 'neutral',
    },
    className: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleClick() {
      this.$emit('onClick');
    },
  },
};
</script>

<template>

  <button
    class='bordered button py-2 px-3'
    :class='[theme, className]'
    @click='handleClick'
  >
    <slot></slot>
  </button>

</template>


<style lang="scss" scoped>
.button {
  background: #fff;
  box-shadow: none;
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
