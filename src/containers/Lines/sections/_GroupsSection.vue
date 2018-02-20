<script>
import { Button, FieldGroup, Input, Modal } from 'components/bits';

export default {
  name: 'GroupsSection',
  components: { Button, FieldGroup, Input, Modal },
  props: {
    list: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data() {
    return {
      selected: [],
      showModal: false,
      newGroup: '',
    };
  },
  methods: {
    selectGroup(group) {
      if (this.selected.includes(group)) {
        this.selected = this.selected.filter(x => x !== group);
      } else {
        this.selected.push(group);
      }
    },
    clear() {
      this.selected = [];
    },
    saveGroup() {
      if (this.newGroup.trim() !== '') {
        const newEntry = {
          id: this.list.length + 1,
          count: 0,
          name: this.newGroup,
        };
        this.$emit('updateGroups', newEntry);
        this.selectGroup(newEntry.id);
        this.clearGroup();
      }
    },
    clearGroup() {
      this.newGroup = '';
      this.showModal = false;
    },
  },
};
</script>

<template>

  <div class='bordered groups-wrapper d-flex flex-column flex-grow p-3'>
    <h3 class='mb-2'>Field Groups</h3>
    <small>Choose a group for this input</small>
    <div>
      <FieldGroup
        v-for='group in list'
        :key='group.id'
        :item='group'
        :selected='selected'
        @onClick='selectGroup'
      />
    </div>
    <Button className='mt-auto' @onClick="showModal = true">Add new Group</Button>
    <Modal v-if='showModal' @close="clearGroup" @save="saveGroup">
      <h3 slot="header">Add new Group</h3>
      <div slot="body">
        <Input label='Group Name' v-model='newGroup' :space='0' />
      </div>
    </Modal>
  </div>

</template>

<style lang="scss" scoped>
.groups-wrapper {
  background: $porcelain;
}
</style>
