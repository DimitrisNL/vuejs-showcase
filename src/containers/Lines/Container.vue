<script>
import { Button } from 'components/bits';
import { dummyTypes, dummyTags, dummyGroups } from 'utils/data';
import { apiCall } from 'utils/functions';

import {
  FormSection,
  GroupsSection,
  TagsSection,
  TypesSection,
} from './sections';

export default {
  name: 'LinesContainer',
  components: { Button, FormSection, TagsSection, TypesSection, GroupsSection },
  data() {
    return {
      dummyData: { dummyTypes, dummyTags, dummyGroups },
    };
  },
  methods: {
    async saveField() {
      this.$refs.formSection.reset();
      if (this.$refs.formSection.isValid()) {
        // Clean up Vue object & arrays
        const params = {
          fieldDetails: { ...this.$refs.formSection.fieldDetails },
          fieldGroups: [...this.$refs.groupsSection.selected],
          fieldTypes: [...this.$refs.typesSection.selected],
          fieldTags: [...this.$refs.tagsSection.selected],
        };

        this.$notify({ text: 'Saving..', type: 'info' });
        // Something more sophisticated when it comes to error handling needed
        await apiCall(params);
        this.$notify({ text: 'Field Saved', type: 'success' });
        this.resetField();
      } else {
        this.$notify({ text: 'Fields incomplete or invalid', type: 'error' });
      }
    },
    resetField() {
      this.$refs.formSection.reset();
      this.$refs.formSection.clear();
      this.$refs.groupsSection.clear();
      this.$refs.typesSection.clear();
      this.$refs.tagsSection.clear();
    },
    deleteField() {
      this.resetField();
      this.$notify({ text: 'Field deleted', type: 'success' });
    },
    updateGroups(group) {
      this.dummyData.dummyGroups.push(group);
    },
  },
};
</script>


<template>
  <div class='d-flex flex-column h-100'>
    <h1 class='font-weight-light mb-4'>Commercial Property - Add Field</h1>

    <!-- Card -->
    <section class='bordered d-flex mb-4 min-h-0 flex-grow'>

      <!-- Side bar  -->
      <div class='sidebar rounded-left'>
        <TypesSection ref='typesSection' :list='dummyData.dummyTypes' />
      </div>
      <!-- End Sidebar -->

      <!--  Main Content -->
      <div class='main bg-white rounded-right d-flex flex-column p-4'>
        <h2 class='mb-3'>Field Details</h2>

        <div class='flex-grow row'>

          <div class='col-8'>
            <FormSection ref='formSection' />
            <TagsSection ref='tagsSection' :list='dummyData.dummyTags' />
          </div>
          <div class='col-4 d-flex'>
            <GroupsSection
              ref='groupsSection'
              :list='dummyData.dummyGroups'
              @updateGroups='updateGroups'
            />
          </div>

        </div>
      </div>
      <!-- End Main Content -->

    </section>
    <!-- End Card -->

    <!-- Actions row -->
    <div class='d-flex align-items-center justify-content-between'>
        <Button className='success' @onClick='saveField'>
          Save Changes
        </Button>
        <Button className='ml-auto' @onClick='resetField'>
          Cancel Changes
        </Button>
        <Button className='danger' @onClick='deleteField'>
          Delete Input
        </Button>
      </div>
    </div>
    <!-- End Actions row -->

</template>


<style lang="scss" scoped>
.sidebar {
  background: $aqua_haze;
  border-right: 1px solid $border-color;
  flex: 0 0 22%;
  overflow: auto;
}
.main {
  flex: 0 0 78%;
  overflow: auto;
}
</style>
