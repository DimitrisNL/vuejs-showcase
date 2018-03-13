# Vue.js Showcase

Simple interface with:
- Custom tag, input, modal, button components
- Validations
- Feedback

[Production build on Netlify](https://nostalgic-goldberg-c2ac24.netlify.com/)

### Some notes on CSS

#### Webpack Adjustments for SCSS

Including SCSS variables in every .vue file.
Avoiding relative paths.

```js
scss: generateLoaders('sass', {
  data: "@import 'src/styles/partials/_variables.scss';\n",
  includePaths: ['node_modules', 'bower_components', 'src', '.'],
}),
```

#### CSS Framework

Bootstrap 4 parts.
Flex and spacing utilities were too good to ignore.
Having a Flex grid is also nice.

```
@import 'bootstrap/scss/functions';
@import 'bootstrap/scss/variables';
@import 'bootstrap/scss/mixins';

@import 'bootstrap/scss/reboot';
@import 'bootstrap/scss/utilities';
@import 'bootstrap/scss/grid';
```

### Build Setup

```bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build
```
