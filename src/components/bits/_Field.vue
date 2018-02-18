<script>
export default {
  name: 'Field',
  props: {
    label: {
      type: String,
      default: '',
    },
    subLabel: {
      type: String,
      default: '',
    },
    space: {
      type: Number,
      default: 2,
    },
    value: {
      type: String,
      default: '',
    },
    hasError: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    spacing() {
      return `mb-${this.space}`;
    },
  },
  methods: {
    handleInput(input) {
      this.$emit('input', input);
    },
    handleBlur() {
      this.$emit('onBlur');
    },
    handleFocus() {
      this.$emit('onFocus');
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
        :class='{error : hasError}'
        :value='value'
        @input='handleInput($event.target.value)'
        @blur='handleBlur'
        @focus='handleFocus'
        />
    </label>
    <small v-if="subLabel" class='mt-2'>{{subLabel}}</small>
  </div>

</template>


<style lang="scss" scoped>
.input {
  height: 35px;
}
</style>
