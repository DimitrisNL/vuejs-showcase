export const dummyTypes = [
  {
    id: 1,
    name: 'Text',
    definition: 'String of Text',
    defaultDisplay: 'Free-form text Input',
    icon: 'header',
  },
  {
    id: 2,
    name: 'Date',
    definition: 'Standard ISO format date',
    defaultDisplay: 'Datepicker, with configurable format',
    icon: 'calendar',
  },
  {
    id: 3,
    name: 'VIN',
    definition: 'Vehicle Indentification Number',
    defaultDisplay: 'Free-form text Input',
    icon: 'car',
  },
  {
    id: 4,
    name: 'Checkbox',
    definition: 'Binary choice',
    defaultDisplay: 'Checkbox',
    icon: 'check-square',
  },
  {
    id: 5,
    name: 'Currency',
    definition: 'Number with decimal and thousand separators',
    defaultDisplay: 'Numerical input',
    icon: 'dollar',
  },
];

export const dummyTags = [
  {
    id: 1,
    name: 'Vinmaster',
    children: [{ id: 7, name: 'Tag 7' }, { id: 8, name: 'Tag 8' }],
  },
  {
    id: 2,
    name: 'ISO',
    children: [{ id: 9, name: 'Tag 9' }, { id: 10, name: 'Tag 10' }],
  },
  {
    id: 3,
    name: 'Parent Tag 3',
    children: [{ id: 11, name: 'Tag 11' }, { id: 12, name: 'Tag 12' }],
  },
  {
    id: 4,
    name: 'Parent Tag 4',
    children: [{ id: 13, name: 'Tag 13' }, { id: 14, name: 'Tag 14' }],
  },
  {
    id: 5,
    name: 'Parent Tag 5',
    children: [{ id: 15, name: 'Tag 15' }, { id: 16, name: 'Tag 16' }],
  },
  {
    id: 6,
    name: 'Parent Tag 6',
    children: [{ id: 17, name: 'Tag 17' }, { id: 18, name: 'Tag 18' }],
  },
];

export const dummyGroups = [
  { id: 1, name: 'Rental Coverage Package', count: 7 },
  { id: 2, name: 'Alternative Rental Coverage Package', count: 0 },
];
