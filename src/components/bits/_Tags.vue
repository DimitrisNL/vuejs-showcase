<script>
export default {
  name: 'TagsGroup',
  props: {
    tags: {
      type: Array,
      default: () => [],
      required: true,
    },
    selected: {
      type: Array,
      default: () => [],
      required: false,
    },
  },
  methods: {
    handleTagSelection(tag) {
      this.$emit('onClick', tag);
    },
  },
};
</script>

<template>

  <div class='d-flex flex-wrap'>
    <div
      v-for="tag in tags"
      :key='tag.id'
      class='bordered tag py-1 px-2 mb-2 mr-2'
      :class='{selected: selected.includes(tag.id)}'
      @click='handleTagSelection(tag)'
    >
      {{tag.name}}
    </div>
  </div>

</template>


<style lang="scss" scoped>
.tag {
  background: $aqua-haze;
  color: $elephant;
  cursor: pointer;
  font-size: 90%;
  &:hover {
    background: darken($aqua-haze, 5%);
  }
  &:active {
    background: darken($aqua-haze, 10%);
  }
  &.selected {
    background: $blue-lagoon;
    color: #fff;
  }
}
</style>
