<script>
import { Card, Field, TagsGroup } from 'components/bits';
import ButtonsRow from 'components/layout/ButtonsRow';
import { fieldTypes, tags } from 'utils/functions';

export default {
  name: 'LinesContainer',
  components: { Card, Field, ButtonsRow, TagsGroup },
  mounted() {
    setTimeout(() => {
      this.fieldTypes = fieldTypes;
      this.tags = tags;
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
      tags: [],
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
};
</script>


<template>
  <div class='content pt-5 pr-5 pb-5 pl-5'>
    <h1 class='w-300 mb-5'>Commercial Property - Add Field</h1>
    <section class='container'>
      <div class='container-side pt-4 pb-4 pl-4 pr-4'>
        <div>
          <h2 class='mb-4'>Field Types</h2>
          <Field label='Filter Types' v-model='search' />
          <div v-for="fieldType in filteredList" :key='fieldType.id'>
            <Card :fieldType=fieldType />
          </div>
        </div>
      </div>
      <div class='container-main pt-4 pb-4 pl-4 pr-4'>
        <h2 class='mb-4'>Field Details</h2>
        <div class='container-content row '>
          <div class='two-thirds column'>
            <div class='row'>
              <div class='half column mb-5'>
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
              <div class='half column'>
                <Field
                  v-model='fieldDetails.referenceName'
                  label='Reference Name'
                  subLabel='Used to reference in calculations,
                  no space allowed'
                  :space='5'
                  />
              </div>
            </div>
            <div>
              <h3 class='mb-4'>Tags</h3>

              <div class='row'>
                <div class='half column'>
                  <div class='mb-3'>Tag Group</div>
                  <TagsGroup :tags='tags'/>
                  </div>


                <div class='half column'>
                  Tags
                  </div>

                </div>

            </div>
          </div>
          <div class='one-third column flex'>
            <div class='groups-wrapper flex-grow pt-4 pb-4 pl-4 pr-4'>

            <h3 class='mb-3'>Field Groups</h3>
            <small>Choose a group for this input</small>
            </div>

          </div>
        </div>
      </div>
    </section>
    <ButtonsRow />
  </div>
</template>


<style lang="scss" scoped>
.title {
  margin-bottom: 2rem;
}
.container {
  border: 1px solid $granny_smith;
  border-radius: $border-radius;

  display: flex;
  flex-grow: 1;

  .container-side {
    background: $aqua_haze;
    border-right: 1px solid $granny_smith;
    border-top-left-radius: $border-radius;
    border-bottom-left-radius: $border-radius;
    flex: 0 0 20%;
    display: flex;
    flex-direction: column;

    > div {
      flex-grow: 1;
      overflow: auto;
    }
  }
  .container-main {
    background: #fff;
    border-top-right-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
    display: flex;
    flex-direction: column;
    flex: 0 0 80%;

    .container-content {
      flex-grow: 1;

      .groups-wrapper {
        background: $porcelain;
        border: 1px solid $granny_smith;
        border-radius: $border-radius;
      }
    }
  }
}
</style>
