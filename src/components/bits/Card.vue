<script>
export default {
  props: ['fieldType'],
  name: 'Card',
};
</script>

<template>

  <div class='card pt-4 pr-4 pl-4 pb-4'>
    <h3 class='mb-4'>{{fieldType.name}}</h3>

    <div class='mb-4 row'>
      <small class='mb-2'>Definition</small>
        {{fieldType.definition}}
      </div>
    <div class='row'>
      <small class='mb-2'>Default Display</small>
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

  .row {
    font-size: 95%;
  }

  &:hover {
    background: $blue_lagoon;
    color: #fff;
  }
}
</style>
