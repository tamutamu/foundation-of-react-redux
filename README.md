udemy_react

yarn install
https://yarnpkg.com/ja/docs/install#mac-stable

yarn add react@15.6.1

yarn add webpack webpack-dev-server babel-core babel-loader babel-preset-react babel-preset-es2015

./node_modules/.bin/webpack-dev-server

https://qiita.com/shota_abe/items/fbd6d988188442a4d11c

webpack4からwebpack-cliが必要

yarn add webpack-cli --dev

webpack.config.jsのloadersがrulesとして名前に変わってる

option --modeを追加してあげる必要がある development, production

```
"scripts": {
  "start": "webpack-dev-server --mode development --open"
},
```

### webpackについて

https://qiita.com/soarflat/items/28bf799f7e0335b68186

### style guide

https://github.com/iraycd/React-Redux-Styleguide
