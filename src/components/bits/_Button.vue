<script>
export default {
  name: 'Button',
  props: {
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
    :class='[className]'
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

  &:hover {
    background: darken(#fff, 5%);
  }
  &:active {
    background: darken(#fff, 10%);
  }

  + .button {
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

  &.card {
    width: 100%;
    text-align: left;
    + .button {
      margin-left: 0;
    }
    &.selected {
      background: $blue-lagoon;
      color: #fff;
      small {
        color: darken(#fff, 10%);
      }
    }
  }
}
</style>
