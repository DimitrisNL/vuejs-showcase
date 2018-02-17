import Lines from './Lines';

export default {
  path: '/',
  key: 'lines-view',
  name: 'Lines',
  icon: 'book',
  component: Lines,
};

/*

  I like to keep the route seperate for each Component-View.
  Mostly because things can get out of hands for large apps with many routes.

  I combine them all in the container/routes, before importing them in my Router object
*/
