<script>
import { required } from 'vuelidate/lib/validators';

import { Button, FieldGroup, FieldType, Input, Tags } from 'components/bits';
import { dummyTypes, dummyTags, dummyGroups } from 'utils/data';
import { sanitizeString, isValidRegex, hasNoSpaces } from 'utils/functions';

export default {
  name: 'LinesContainer',
  components: { Button, FieldGroup, FieldType, Input, Tags },
  validations: {
    fieldDetails: {
      displayLabel: { required },
      defaultValue: { required },
      customValidation: { isValidRegex },
      referenceName: { required, hasNoSpaces },
    },
  },
  data() {
    return {
      search: '',
      fieldDetails: {
        displayLabel: '',
        defaultValue: '',
        customValidation: '',
        referenceName: '',
      },
      fieldTypes: {
        list: dummyTypes,
        selected: dummyTypes[0].id,
      },
      fieldGroups: {
        list: dummyGroups,
        selected: [],
      },
      fieldTags: {
        list: dummyTags,
        filtered: [],
        selected: [],
      },
    };
  },
  computed: {
    filteredTypesList() {
      return this.fieldTypes.list.filter(type =>
        type.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    saveField() {
      this.$v.fieldDetails.$touch();
      if (this.$v.fieldDetails.$invalid) {
        this.$notify({ text: 'Fields incomplete or invalid', type: 'error' });
      } else {
        this.$notify({ text: 'Saving..', type: 'info' });
        setTimeout(() => {
          console.log('Field Type Id', this.fieldTypes.selected);
          console.log('Tag Id(s)', this.fieldTags.selected);
          console.log('Group Id(s)', this.fieldGroups.selected);
          console.log('Field Details', { ...this.fieldDetails });
          this.resetField();
          this.$notify({ text: 'Field Saved', type: 'success' });
        }, 1000);
      }
    },
    resetField() {
      this.$v.fieldDetails.$reset();
      this.fieldTags = { ...this.fieldTags, filtered: [], selected: [] };
      this.fieldGroups = { ...this.fieldGroups, selected: [] };
      this.fieldTypes.selected = this.fieldTypes.list[0].id;
      Object.keys(this.fieldDetails).forEach(key => {
        this.fieldDetails[key] = '';
      });
    },
    deleteField() {
      this.resetField();
      this.$notify({ text: 'Field deleted', type: 'success' });
    },
    populateReferenceName() {
      this.$v.fieldDetails.displayLabel.$touch();
      if (this.fieldDetails.referenceName.trim() === '') {
        const suggestion = sanitizeString(this.fieldDetails.displayLabel);
        this.fieldDetails.referenceName = suggestion;
      }
    },
    populateTags(tag) {
      this.fieldTags = {
        ...this.fieldTags,
        filtered: tag.children,
        selected: [],
      };
    },
    selectTag(tag) {
      if (this.fieldTags.selected.includes(tag.id)) {
        this.fieldTags.selected = this.fieldTags.selected.filter(
          x => x !== tag.id
        );
      } else {
        this.fieldTags.selected.push(tag.id);
      }
    },
    selectGroup(group) {
      if (this.fieldGroups.selected.includes(group)) {
        this.fieldGroups.selected = this.fieldGroups.selected.filter(
          x => x !== group
        );
      } else {
        this.fieldGroups.selected.push(group);
      }
    },
    selectFieldType(type) {
      this.fieldTypes.selected = type;
    },
  },
};
</script>


<template>
  <div class='d-flex flex-column h-100'>
    <h1 class='font-weight-light mb-4'>Commercial Property - Add Field</h1>

    <section class='bordered d-flex mb-4 min-h-0 flex-grow'>

      <!-- Sidebar  -->
      <div class='sidebar rounded-left'>
        <div class='p-4'>
          <h2 class='mb-3'>Field Types</h2>
          <Input label='Filter Types' v-model='search' :space='0' />
          <FieldType
            v-for="fieldType in filteredTypesList"
            :key='fieldType.id'
            :item=fieldType
            :selected='fieldTypes.selected'
            @onClick='selectFieldType'
          />
          </div>
      </div>
      <!-- End Sidebar -->

      <!-- Main Content -->
      <div class='main bg-white rounded-right d-flex flex-column p-4'>
        <h2 class='mb-3'>Field Details</h2>

        <div class='flex-grow row'>

          <div class='col-8'>
            <!-- Inputs Row-->
            <div class='row'>
              <div class='col-6'>
                <Input
                  v-model='fieldDetails.displayLabel'
                  @onBlur='populateReferenceName'
                  @onFocus='$v.fieldDetails.displayLabel.$reset()'
                  :hasError='$v.fieldDetails.displayLabel.$error'
                  :space='4'
                  label='Display Label'
                  subLabel='For display purposes, spaces allowed'
                />
                <Input
                  v-model='fieldDetails.defaultValue'
                  @onBlur='$v.fieldDetails.defaultValue.$touch()'
                  @onFocus='$v.fieldDetails.defaultValue.$reset()'
                  :hasError='$v.fieldDetails.defaultValue.$error'
                  :space='4'
                  label='Default Value'
                />
                <Input
                  v-model='fieldDetails.customValidation'
                  @onBlur='$v.fieldDetails.customValidation.$touch()'
                  @onFocus='$v.fieldDetails.customValidation.$reset()'
                  :hasError='$v.fieldDetails.customValidation.$error'
                  :space='4'
                  label='Custom Validation'
                  subLabel='Any regex pattern can
                  be used for custom input validation'
                />
              </div>
              <div class='col-6'>
                <Input
                  v-model='fieldDetails.referenceName'
                  @onBlur='$v.fieldDetails.referenceName.$touch()'
                  @onFocus='$v.fieldDetails.referenceName.$reset()'
                  :hasError='$v.fieldDetails.referenceName.$error'
                  :space='4'
                  label='Reference Name'
                  subLabel='Used to reference in calculations,
                  no spaces allowed'
                />
              </div>
            </div>
            <!-- End Inputs Row-->

            <!-- Tags Row-->
            <div>
              <h3 class='mb-3'>Tags</h3>
              <div class='row'>
                <div class='col-6'>
                  <div class='mb-2'>Tag Group</div>
                  <Tags :tags='fieldTags.list' @onClick='populateTags' />
                </div>
                <div class='col-6'>
                  <div class='mb-2'>Tags</div>
                  <small v-if='fieldTags.filtered.length === 0'>
                    <em>Select a tag group to see individual tags</em>
                  </small>
                  <Tags
                    v-if='fieldTags.filtered.length >= 0'
                    :tags='fieldTags.filtered'
                    :selected='fieldTags.selected'
                    @onClick='selectTag'
                  />
                </div>
              </div>
            </div>
             <!-- Tags Row-->
          </div>
          <div class='col-4 d-flex'>
            <div class='bordered groups-wrapper d-flex flex-column flex-grow p-3'>
              <h3 class='mb-2'>Field Groups</h3>
              <small>Choose a group for this input</small>
              <div>
                <FieldGroup
                  v-for='group in fieldGroups.list'
                  :key='group.id'
                  :item='group'
                  :selected='fieldGroups.selected'
                  @onClick='selectGroup'
                />
              </div>
              <Button className='mt-auto'>
                Add new Group
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Main Content -->

    <!-- Buttons Rows -->
    <div class='d-flex align-items-center justify-content-between'>
        <Button theme='success' @onClick='saveField'>
          Save Changes
        </Button>
        <Button className='ml-auto' @onClick='resetField'>
          Cancel Changes
        </Button>
        <Button theme='danger' @onClick='deleteField'>
          Delete Input
        </Button>
      </div>
    </div>
    <!-- End Buttons row -->

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
  .groups-wrapper {
    background: $porcelain;
  }
}
</style>
