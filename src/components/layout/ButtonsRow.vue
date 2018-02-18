<script>
import { Button } from 'components/bits';

export default {
  components: { Button },
  name: 'ButtonsRow',
};
</script>

<template>

  <div class='wrapper pt-5'>
    <div>
      <Button label='Save Changes' theme='success' />
    </div>
    <div>
      <Button label='Cancel Changes' theme='neutral' />
      <Button label='Delete Input' theme='danger' />
    </div>
  </div>

</template>


<style lang="scss" scoped>
.wrapper {
  align-items: center;
  display: flex;
  justify-content: space-between;
}
</style>
