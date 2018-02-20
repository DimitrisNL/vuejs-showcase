<script>
import { FieldType, Input } from 'components/bits';

export default {
  name: 'TypesSection',
  components: {
    FieldType,
    Input,
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
      search: '',
      // No-go. But I get the items synchronously for now
      selected: this.list[0].id,
    };
  },
  computed: {
    filteredTypesList() {
      return this.list.filter(type =>
        type.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    selectFieldType(type) {
      this.selected = type;
    },
    clear() {
      this.selected = this.list[0].id;
    },
  },
};
</script>

<template>

  <div class='p-4'>
    <h2 class='mb-3'>Field Types</h2>
    <Input label='Filter Types' v-model='search' :space='0' />
    <FieldType
      v-for="fieldType in filteredTypesList"
      :key='fieldType.id'
      :item=fieldType
      :selected='selected'
      @onClick='selectFieldType'
    />
    </div>

</template>
