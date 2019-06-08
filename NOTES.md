# Create a project

Tool to help start a new webpack project: https://createapp.dev/

```bash
$ yarn init
$ touch .gitignore
$ mkdir src
$ touch src/index.js
$ touch src/styles.css
$ mkdir dist
$ touch dist/index.html
```

## Webpack

```bash
$ yarn add webpack webpack-cli webpack-dev-server webpack-merge -D
$ touch webpack.config.js
$ touch webpack.dev.config.js
$ touch webpack.prod.config.js
```

Plugins

```bash
$ yarn add html-webpack-plugin clean-webpack-plugin -D
```

### Babel

```bash
$ yarn add @babel/core @babel/preset-env babel-loader file-loader -D
$ touch .babelrc
```

### ESlint

```bash
$ yarn add eslint eslint-loader eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-config-airbnb -D
$ touch .eslintrc.json
```

### React

```bash
$ yarn add react react-dom react-hot-loader
$ yarn add @babel/preset-react css-loader style-loader -D
```

### Redux

```bash
$ yarn add redux react-redux redux-logger redux-thunk tachyons
```