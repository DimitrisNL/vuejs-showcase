<script>
export default {
  props: {
    fieldType: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  name: 'Card',
};
</script>

<template>

  <div class='bordered card p-3 mb-4'>
    <h3 class='mb-3'>
      <i :class="`fa fa-${fieldType.icon} mr-1`"></i>
      {{fieldType.name}}
    </h3>

    <div class='mb-3 entry'>
      <small class='mb-2'>Definition</small>
        {{fieldType.definition}}
      </div>
    <div class='entry'>
      <small class='mb-2'>Default Display</small>
      {{fieldType.defaultDisplay}}
    </div>
  </div>

</template>


<style lang="scss" scoped>
.card {
  background: #fff;
  cursor: pointer;
  transition: all $base-transition;

  .entry {
    font-size: 95%;
  }

  &:hover {
    background: $blue_lagoon;
    color: #fff;
  }
}
</style>
