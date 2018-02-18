<script>
import { Button, Card, Field, TagsGroup } from 'components/bits';
import { fieldTypes, tags } from 'utils/data';
import { sanitizeString, validateRegex } from 'utils/functions';

export default {
  name: 'LinesContainer',
  components: { Button, Card, Field, TagsGroup },
  data() {
    return {
      search: '',
      fieldDetails: {
        displayLabel: { value: '', hasError: false, required: true },
        defaultValue: { value: '', hasError: false, required: true },
        customValidation: { value: '', hasError: false, required: false },
        referenceName: { value: '', hasError: false, required: true },
      },
      fieldTypes,
      tags: {
        list: tags,
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
      const isValid = this.validateAllFields();
      if (isValid) {
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
      if (this.fieldDetails.referenceName.value.trim() === '') {
        const suggestion = sanitizeString(this.fieldDetails.displayLabel.value);
        this.fieldDetails.referenceName.value = suggestion;
      }
    },
    validateRegex() {
      const isValid = validateRegex(this.fieldDetails.customValidation.value);
      this.fieldDetails.customValidation.hasError = !isValid;
    },
    validateAllFields() {
      return Object.keys(this.fieldDetails).every(key => {
        const { value, required } = this.fieldDetails[key];
        if (required && value.trim() === '') {
          this.fieldDetails[key].hasError = true;
        }
        return !this.fieldDetails[key].hasError;
      });
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
      <div class='main rounded-right d-flex flex-column p-4'>
        <h2 class='mb-3'>Field Details</h2>

        <div class='flex-grow row'>

          <div class='col-8'>
            <!-- Inputs Row-->
            <div class='row'>
              <div class='col-6'>
                <Field
                  v-model='fieldDetails.displayLabel.value'
                  @onBlur='populateReferenceName'
                  @onFocus='fieldDetails.displayLabel.hasError = false'
                  :hasError='fieldDetails.displayLabel.hasError'
                  :space='4'
                  label='Display Label'
                  subLabel='For display purposes, spaces allowed'
                />
                <Field
                  v-model='fieldDetails.defaultValue.value'
                  @onFocus='fieldDetails.defaultValue.hasError = false'
                  :hasError='fieldDetails.defaultValue.hasError'
                  :space='4'
                  label='Default Value'
                />
                <Field
                  v-model='fieldDetails.customValidation.value'
                  @onFocus='fieldDetails.customValidation.hasError = false'
                  @onBlur='validateRegex'
                  :hasError='fieldDetails.customValidation.hasError'
                  :space='4'
                  label='Custom Validation'
                  subLabel='Any regex pattern can
                  be used for custom input validation'
                />
              </div>
              <div class='col-6'>
                <Field
                  v-model='fieldDetails.referenceName.value'
                  @onFocus='fieldDetails.referenceName.hasError = false'
                  :hasError='fieldDetails.referenceName.hasError'
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
.title {
  margin-bottom: 2rem;
}

.sidebar {
  background: $aqua_haze;
  border-right: 1px solid $granny_smith;
  flex: 0 0 22%;
  overflow: auto;
}
.main {
  background: #fff;
  flex: 0 0 78%;
  overflow: auto;
  .groups-wrapper {
    background: $porcelain;
  }
}
</style>
