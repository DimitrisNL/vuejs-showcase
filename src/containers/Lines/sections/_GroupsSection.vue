<script>
import { Button, FieldGroup } from 'components/bits';

export default {
  name: 'GroupsSection',
  components: {
    Button,
    FieldGroup,
  },
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
    <Button className='mt-auto'>Add new Group</Button>
  </div>

</template>

<style lang="scss" scoped>
.groups-wrapper {
  background: $porcelain;
}
</style>
