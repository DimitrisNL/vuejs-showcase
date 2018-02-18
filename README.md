# BriteCore Interview - Dimitrios Lytras

:construction: :construction: Still in progress :construction: :construction:

> A project for interview process

[Production build on Netlify](https://nostalgic-goldberg-c2ac24.netlify.com/)

### Dependencies

* sanitize.css for some basic css normalization
* font-awesome 4

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

#### Spacing

I'm using `0.125`, `0.25`, `0.5`, `1`, `2`, `4` (rem) thorough the project.

Hat's off to [furey](https://github.com/furey) for the sweet mixin I've modified, found [here](https://github.com/jgthms/bulma/issues/451).

#### CSS Framework

None.
Something which actually could have saved a lot of time.
Probably should have included Bootstrap 4 grid and flex utilities.

### Build Setup

```bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build
```
