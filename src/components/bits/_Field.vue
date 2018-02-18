<script>
export default {
  name: 'Field',
  props: ['label', 'subLabel', 'space', 'fieldValue'],
  computed: {
    spacing() {
      return `mb-${this.space || 2}`;
    },
  },
  methods: {
    handleInput(input) {
      this.$emit('input', input);
    },
  },
};
</script>

<template>
  <div :class='spacing'>
    <label class='w-100 mb-0'>
      <div class='mb-2'>
        {{label}}
      </div>
      <input
        class='bordered input bg-white p-2 w-100'
        :value='fieldValue'
        @input='handleInput($event.target.value)'
        />
    </label>
    <small v-if="subLabel" class='mt-1'>{{subLabel}}</small>
  </div>

</template>


<style lang="scss" scoped>
.input {
  height: 35px;
}
</style>
