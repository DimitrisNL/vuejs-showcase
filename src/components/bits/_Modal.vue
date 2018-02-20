<script>
// https://vuejs.org/v2/examples/modal.html - Based on this boilerplate
import Button from './_Button';

export default {
  name: 'Modal',
  components: { Button },
};
</script>

<template>
    <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <slot name="header" />

          <div class="my-4">
            <slot name="body" />
          </div>

          <div class="d-flex">
            <slot name="footer">
              <Button className='success' @onClick="$emit('save')">
                Save
              </Button>
              <Button className='ml-auto' @onClick="$emit('close')">
                Clear
              </Button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>


<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: $border-radius;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-leave-active,
.modal-enter {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: scale(1.1);
}
</style>
