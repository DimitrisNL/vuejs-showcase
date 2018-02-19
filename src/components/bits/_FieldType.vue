<script>
import Button from './_Button';

export default {
  name: 'FieldType',
  components: { Button },
  props: {
    item: {
      type: Object,
      default: () => {},
      required: true,
    },
    selected: {
      type: Number,
      default: -1,
      required: false,
    },
  },
  computed: {
    className() {
      const selected = this.selected === this.item.id ? 'selected' : '';
      return `p-3 mt-3 ${selected}`;
    },
  },
  methods: {
    handleClick(type) {
      this.$emit('onClick', type.id);
    },
  },
};
</script>

<template>

  <Button
    :className='className'
    theme='card'
    @onClick='handleClick(item)'>
    <h3 class='mb-3'>
      <i :class="`fa fa-${item.icon} mr-1`"></i>
      {{item.name}}
    </h3>

    <div class='mb-3 entry'>
      <small class='mb-2'>Definition</small>
        {{item.definition}}
      </div>
    <div class='entry'>
      <small class='mb-2'>Default Display</small>
      {{item.defaultDisplay}}
    </div>
  </Button>

</template>
