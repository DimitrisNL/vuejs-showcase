// https://stackoverflow.com/questions/17250815/how-to-check-if-the-input-string-is-a-valid-regular-expression
export const validateRegex = (regex = '') => {
  let isValid = true;

  try {
    RegExp(regex);
  } catch (e) {
    isValid = false;
  }

  return isValid;
};

// eslint-disable-next-line
export const sanitizeString = (string = '') => {
  return string
    .toLowerCase()
    .split(' ')
    .join('_');
};
