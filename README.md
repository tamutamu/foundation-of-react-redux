### udemy_react

#### yarnの追加

yarn install
https://yarnpkg.com/ja/docs/install#mac-stable

yarn add react@15.6.1

#### webpackの追加

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

#### eslintの追加

動画作成時のeslintのバージョン(3.19.0)では再現しませんでしたが、現在の最新バージョン(4.7.0)で再現できました。

こちらは eslint --init  の中で npm install  が走っていて、それによって ./node_modules/.bin  フォルダが消えてしまっていたようです。

1. バージョン指定する
yarn add eslint@3.19.0 eslint-plugin-react

2. yarn install

* Atomプラグインのインストール
⌘コマンドを押してから,カンマ押す
+install
エディタから入れる方法とapmというコマンドラインから入れる方法がある

* Airbnbのスタイルガイドがバージョン依存で動かない
eslint@3.19.0ではairbnbのスタイルガイドが動かないのでeslintは5.1.0でうまく動いた(2018/7/15)

#### sass scssの追加

```
yarn add node-sass style-loader css-loader sass-loader import-glob-loader extract-text-webpack-plugin
```

* extract-text-webpack-pluginはwebpack4で対応していなかったけど、alpha版で対応するようになった

```
Use Chunks.groupsIterable and filter by instanceof Entrypoint instead
```

https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/701

```
yarn add --dev extract-text-webpack-plugin@next
```

webpack コマンド正常に動いた(2017/7/16 8:26)


### React

#### react version

reactのバージョン 16から
https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md

1. prop-typesをインストール → $ yarn add prop-types

2. PropTypesを、reactではなくprop-typesから取得

before

```js
import React, { PropTypes } from 'react';
```

after

```js
import React from 'react';
import PropTypes from 'prop-types';
```

### Atomについて

#### apm

コマンドラインでatomのpluginをインストールできる

```
apm install es6-javascript intentions busy-signal linter-ui-default linter linter-eslint
```

#### 画面分割、閉じる、移動

* 分割

```
command + k ↑↓←→
```
* 閉じる

```
command + w
```

* 移動

```
command + k command + ↑↓←→
```

#### indent

Edit->Lines->Auto Indent

#### タブ移動

alt + command ←→

#### jsxにjsの文法を効かせる

```
apm install language-javascript-jsx
```

#### javascriptコンソール

command + option + j
Sources

#### eslint 集

```
jsx not allowed in files with extension '.js'
```

https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md


yarn check
したら
eslintのバージョンとairbnbのconfigのバージョンでerrorいわれる

#### emmet

htmlみたいにjsxもhtmlタグを補完する

```
apm install emmet
```

```
'atom-text-editor[data-grammar="source js jsx"]':
  'tab': 'emmet:expand-abbreviation-with-tab'
```

### webpackについて

https://qiita.com/soarflat/items/28bf799f7e0335b68186

### sass

http://sass-lang.com/documentation/

### style guide

https://github.com/iraycd/React-Redux-Styleguide
