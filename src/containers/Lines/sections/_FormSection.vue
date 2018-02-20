<script>
import { required } from 'vuelidate/lib/validators';

import { Input } from 'components/bits';
import { sanitizeString, isValidRegex, hasNoSpaces } from 'utils/functions';

export default {
  name: 'FormSection',
  components: { Input },
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
      fieldDetails: {
        displayLabel: '',
        defaultValue: '',
        customValidation: '',
        referenceName: '',
      },
    };
  },
  methods: {
    populateReferenceName() {
      this.$v.fieldDetails.displayLabel.$touch();
      if (this.fieldDetails.referenceName.trim() === '') {
        const suggestion = sanitizeString(this.fieldDetails.displayLabel);
        this.fieldDetails.referenceName = suggestion;
      }
    },
    clear() {
      Object.keys(this.fieldDetails).forEach(key => {
        this.fieldDetails[key] = '';
      });
    },
    touch() {
      this.$v.fieldDetails.$touch();
    },
    reset() {
      this.$v.fieldDetails.$reset();
    },
    isValid() {
      return !this.$v.fieldDetails.$invalid;
    },
  },
};
</script>

<template>

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

</template>
