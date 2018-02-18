<script>
export default {
  name: 'Field',
  props: ['label', 'subLabel', 'space'],
  computed: {
    spacing() {
      return `mb-${this.space || 3}`;
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
    <label>
      <div class='mb-3'>
        {{label}}
      </div>
      <input
        class='input pt-3 pr-3 pb-3 pl-3'
        :value='fieldValue'
        @input='handleInput($event.target.value)'
        />
    </label>
    <small v-if="subLabel" class='mt-3'>{{subLabel}}</small>
  </div>

</template>


<style lang="scss" scoped>
.input {
  background: #fff;
  border: 1px solid $granny_smith;
  border-radius: $border-radius;
  height: 35px;
  width: 100%;
}
</style>
