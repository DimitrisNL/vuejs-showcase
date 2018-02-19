<script>
import Button from './_Button';

export default {
  name: 'FieldGroup',
  components: { Button },
  props: {
    item: {
      type: Object,
      default: () => {},
      required: true,
    },
    selected: {
      type: Array,
      default: () => [],
      required: false,
    },
  },
  computed: {
    className() {
      const selected = this.selected.includes(this.item.id) ? 'selected' : '';
      return `p-2 mt-3 ${selected}`;
    },
  },
  methods: {
    handleClick(group) {
      this.$emit('onClick', group.id);
    },
  },
};
</script>

<template>

  <Button
    :className='className'
    theme='card'
    @onClick='handleClick(item)'>
      <div class='font-weight-bold'>{{item.name}}</div>
      <small
        v-if='item.count > 0'
        class='mt-1'>
          {{item.count}} other inputs
      </small>
  </Button>

</template>
