<script>
export default {
  props: ['fieldType'],
  name: 'Card',
};
</script>

<template>

  <div class='card pt-4 pr-4 pl-4 pb-4'>
    <h3 class='mb-4'>
      <i :class="`fa fa-${fieldType.icon} mr-2`"></i>
      {{fieldType.name}}
    </h3>

    <div class='mb-4 entry'>
      <small class='mb-3'>Definition</small>
        {{fieldType.definition}}
      </div>
    <div class='entry'>
      <small class='mb-3'>Default Display</small>
      {{fieldType.defaultDisplay}}
    </div>
  </div>

</template>


<style lang="scss" scoped>
.card {
  background: #fff;
  border: 1px solid $granny_smith;
  border-radius: $border-radius;
  cursor: pointer;
  transition: all $base-transition;
  margin: 1rem 0;

  .entry {
    font-size: 95%;
  }

  &:hover {
    background: $blue_lagoon;
    color: #fff;
  }
}
</style>
