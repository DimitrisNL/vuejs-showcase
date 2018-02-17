<script>
export default {
  name: 'Field',
  props: ['label'],
};
</script>

<template>
  <label class='mb-5'>
    <div class='mb-3'>
      {{label}}
    </div>
    <input class='input pt-3 pr-3 pb-3 pl-3'/>
  </label>

</template>


<style lang="scss" scoped>
.input {
  background: #fff;
  border: 1px solid $granny_smith;
  border-radius: $border-radius;
  width: 100%;
}
</style>
