<script>
import { Tags } from 'components/bits';

export default {
  name: 'TagsSection',
  components: { Tags },
  props: {
    list: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data() {
    return {
      filtered: [],
      selected: [],
    };
  },
  methods: {
    populateTags(tag) {
      this.filtered = tag.children;
      this.selected = [];
    },
    selectTag(tag) {
      if (this.selected.includes(tag.id)) {
        this.selected = this.selected.filter(x => x !== tag.id);
      } else {
        this.selected.push(tag.id);
      }
    },
    clear() {
      this.filtered = [];
      this.selected = [];
    },
  },
};
</script>

<template>

  <div>
    <h3 class='mb-3'>Tags</h3>
    <div class='row'>
      <div class='col-6'>
        <div class='mb-2'>Tag Group</div>
        <Tags :tags='list' @onClick='populateTags' />
      </div>
      <div class='col-6'>
        <div class='mb-2'>Tags</div>
        <small v-if='filtered.length === 0'>
          <em>Select a tag group to see individual tags</em>
        </small>
        <Tags
          v-if='filtered.length >= 0'
          :tags='filtered'
          :selected='selected'
          @onClick='selectTag'
        />
      </div>
    </div>
  </div>

</template>
