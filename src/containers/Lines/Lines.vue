<script>
import { Card, Field } from 'components/bits';
import ButtonsRow from 'components/layout/ButtonsRow';
import { fieldTypes } from 'utils/functions';

export default {
  name: 'LinesContainer',
  components: { Card, Field, ButtonsRow },
  mounted() {
    setTimeout(() => {
      this.fieldTypes = fieldTypes;
    }, 1200);
  },
  data() {
    return {
      fieldTypes: [],
      filteredFieldTypes: [],
    };
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
               <Field label='Filter Types' />
               <div v-for="fieldType in fieldTypes" :key='fieldType.id'>
                  <Card :fieldType=fieldType />
               </div>
            </div>
         </div>
         <div class='container-main pt-4 pb-4 pl-4 pr-4'>
            <h2 class='mb-4'>Field Details</h2>
            <div class='container-content'>
               <div class='column'>
                  <Field label='Display Label' />
                  <Field label='Default Value' />
                  <Field label='Filter Types' />
                  <Field label='Filter Types' />
                  <Field label='Filter Types' />
               </div>
               <div class='column'>
                  <Field label='Reference Name' />
                  <Field label='Filter Types' />
                  <Field label='Filter Types' />
                  <Field label='Filter Types' />
                  <Field label='Filter Types' />
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
    flex: 0 0 80%;

    .container-content {
      display: flex;
      margin: 0 -1rem;

      .column {
        flex: 1 0 auto;
        padding: 0 1rem;
      }
    }
  }
}
</style>
