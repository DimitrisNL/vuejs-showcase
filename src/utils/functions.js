export const isValidRegex = value => {
  let isValid = true;

  try {
    RegExp(value);
  } catch (e) {
    isValid = false;
  }

  return isValid;
};

export const hasNoSpaces = value => {
  return value.length === value.trim().length;
};

export const sanitizeString = (string = '') => {
  return string
    .toLowerCase()
    .split(' ')
    .join('_');
};

export const apiCall = params => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(params);
      resolve('Saved');
    }, 1500);
  });
};
