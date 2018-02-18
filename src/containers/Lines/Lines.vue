<script>
import { Button, Card, Field, TagsGroup } from 'components/bits';
import { fieldTypes, tags } from 'utils/data';

export default {
  name: 'LinesContainer',
  components: { Button, Card, Field, TagsGroup },
  mounted() {
    setTimeout(() => {
      this.fieldTypes = fieldTypes;
      this.tags.list = tags;
    }, 1200);
  },
  data() {
    return {
      search: '',
      fieldDetails: {
        displayLabel: '',
        defaultvalue: '',
        customValidation: '',
        referenceName: '',
      },
      fieldTypes: [],
      tags: {
        list: [],
        selected: [],
      },
    };
  },
  computed: {
    filteredList() {
      return this.fieldTypes.filter(type =>
        // eslint-disable-next-line
        type.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    handleButtonClick(message) {
      // eslint-disable-next-line
      alert(message);
    },
    handleTagPopulation(tag) {
      this.tags.selected = tag.children;
    },
    handleTagSelection(tag) {
      // eslint-disable-next-line
      alert(tag.name);
    },
  },
};
</script>


<template>
  <div class='d-flex flex-column h-100 p-4'>
    <h1 class='font-weight-normal mb-4'>Commercial Property - Add Field</h1>

    <section class='bordered d-flex mb-4 min-h-0 flex-grow'>

      <!-- Sidebar  -->
      <div class='sidebar rounded-left d-flex flex-column p-4'>
        <div>
          <h2 class='mb-3'>Field Types</h2>

          <Field label='Filter Types' v-model='search' :space='4' />

          <div v-for="fieldType in filteredList" :key='fieldType.id'>
            <Card :fieldType=fieldType />
          </div>
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
              <div class='col-6 mb-4'>
                <Field
                  v-model='fieldDetails.displayLabel'
                  label='Display Label'
                  subLabel='For display purposes, spaces allowed'
                  :space='5'
                  />
                <Field
                  v-model='fieldDetails.defaultValue'
                  label='Default Value'
                  :space='5' />
                <Field
                  v-model='fieldDetails.customValidation'
                  label='Custom Validation'
                  subLabel='Any regex pattern can
                  be used for custom input validation'
                  :space='5'
                  />
              </div>
              <div class='col-6'>
                <Field
                  v-model='fieldDetails.referenceName'
                  label='Reference Name'
                  subLabel='Used to reference in calculations,
                  no space allowed'
                  :space='5'
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
                    @onClick='handleTagPopulation'
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
                    @onClick='handleTagSelection'
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
      <div>
        <Button theme='success' @onClick='handleButtonClick("Success")'>
          Save Changes
        </Button>
      </div>
      <div>
        <Button theme='neutral' @onClick='handleButtonClick("Canceled")'>
            Cancel Changes
        </Button>
        <Button theme='danger' @onClick='handleButtonClick("Deleted!")'>
          Delete Input
        </Button>
      </div>
    </div>
    <!-- End Buttons row -->


  </div>
</template>


<style lang="scss" scoped>
.title {
  margin-bottom: 2rem;
}

.sidebar {
  background: $aqua_haze;
  border-right: 1px solid $granny_smith;
  flex: 0 0 20%;

  > div {
    flex-grow: 1;
    overflow: auto;
  }
}
.main {
  background: #fff;
  flex: 0 0 80%;
  .groups-wrapper {
    background: $porcelain;
  }
}
</style>
