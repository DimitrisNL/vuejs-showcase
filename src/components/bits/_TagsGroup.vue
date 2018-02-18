<script>
export default {
  name: 'TagsGroup',
  props: ['tags'],
};
</script>

<template>

  <div class='row small-gutter'>

    <div class='column' v-for="tag in tags" :key='tag.id'>
      <div class='tag pt-2 pr-3 pb-2 pl-3 mb-3'>{{tag.name}}</div>
    </div>

  </div>

</template>


<style lang="scss" scoped>
.tag {
  background: $aqua-haze;
  border: 1px solid $granny_smith;
  border-radius: $border-radius;
  font-size: 90%;
}
</style>
