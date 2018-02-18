<script>
import { required } from 'vuelidate/lib/validators';

import { Button, Card, Field, TagsGroup } from 'components/bits';
import { dummyFieldTypes, dummyTags } from 'utils/data';
import { sanitizeString, isValidRegex, hasNoSpaces } from 'utils/functions';

export default {
  name: 'LinesContainer',
  components: { Button, Card, Field, TagsGroup },
  validations: {
    form: {
      displayLabel: { required },
      defaultValue: { required },
      customValidation: { isValidRegex },
      referenceName: { required, hasNoSpaces },
    },
  },
  data() {
    return {
      search: '',
      fieldTypes: dummyFieldTypes,
      form: {
        displayLabel: '',
        defaultValue: '',
        customValidation: '',
        referenceName: '',
      },
      tags: {
        list: dummyTags,
        selected: [],
      },
    };
  },
  computed: {
    filteredList() {
      return this.fieldTypes.filter(type =>
        type.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    saveField() {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        // eslint-disable-next-line
        alert('Saved');
      }
    },
    resetField() {
      console.log('resetted');
    },
    deleteField() {
      console.log('deleted');
    },
    populateTags(tag) {
      this.tags.selected = tag.children;
    },
    selectTag(tag) {
      console.log(tag.name);
    },
    populateReferenceName() {
      this.$v.form.displayLabel.$touch();
      if (this.form.referenceName.trim() === '') {
        const suggestion = sanitizeString(this.form.displayLabel);
        this.form.referenceName = suggestion;
      }
    },
  },
};
</script>


<template>
  <div class='d-flex flex-column h-100'>
    <h1 class='font-weight-light mb-4'>Commercial Property - Add Field</h1>

    <section class='bordered d-flex mb-4 min-h-0 flex-grow'>

      <!-- Sidebar  -->
      <div class='sidebar rounded-left d-flex flex-column p-4'>
        <h2 class='mb-3'>Field Types</h2>

        <Field label='Filter Types' v-model='search' :space='3' />

        <div v-for="fieldType in filteredList" :key='fieldType.id'>
          <Card :fieldType=fieldType />
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
                <Field
                  v-model='form.displayLabel'
                  @onBlur='populateReferenceName'
                  @onFocus='$v.form.displayLabel.$reset()'
                  :hasError='$v.form.displayLabel.$error'
                  :space='4'
                  label='Display Label'
                  subLabel='For display purposes, spaces allowed'
                />
                <Field
                  v-model='form.defaultValue'
                  @onBlur='$v.form.defaultValue.$touch()'
                  @onFocus='$v.form.defaultValue.$reset()'
                  :hasError='$v.form.defaultValue.$error'
                  :space='4'
                  label='Default Value'
                />
                <Field
                  v-model='form.customValidation'
                  @onBlur='$v.form.customValidation.$touch()'
                  @onFocus='$v.form.customValidation.$reset()'
                  :hasError='$v.form.customValidation.$error'
                  :space='4'
                  label='Custom Validation'
                  subLabel='Any regex pattern can
                  be used for custom input validation'
                />
              </div>
              <div class='col-6'>
                <Field
                  v-model='form.referenceName'
                  @onBlur='$v.form.referenceName.$touch()'
                  @onFocus='$v.form.referenceName.$reset()'
                  :hasError='$v.form.referenceName.$error'
                  :space='4'
                  label='Reference Name'
                  subLabel='Used to reference in calculations,
                  no space allowed'
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
                  <TagsGroup
                    :tags='tags.list'
                    @onClick='populateTags'
                  />
                </div>
                <div class='col-6'>
                  <div class='mb-2'>Tag Group</div>
                  <small v-if='tags.selected.length === 0'>
                    <em>Select a tag group to see individual tags</em>
                  </small>
                  <TagsGroup
                    v-if='tags.selected.length >= 0'
                    :tags='tags.selected'
                    @onClick='selectTag'
                  />
                </div>
              </div>
            </div>
             <!-- Tags Row-->
          </div>

          <div class='col-4 d-flex'>
            <div class='bordered groups-wrapper flex-grow p-3'>
              <h3 class='mb-2'>Field Groups</h3>
              <small>Choose a group for this input</small>
              <!-- <div>
                <div>
                  <div>Rental Coverage Package</div>
                  <small>7 other inputs</small>
                </div>
                </div> -->
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
