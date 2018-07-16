const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const publidDir = path.join(__dirname, '/public');
module.exports = [
  {
    // webpack v4以降はmode指定しないと警告が出る
    mode: 'development',
    entry: [
      './src/index.jsx',
    ],
    output: {
      path: publidDir,
      publicPath: '/',
      filename: 'bundle.js',
    },
    /*
    * ローダーの設定
    * 画像やCSSなどのJavascript以外のファイルをJavascriptで扱えるように変換したり、バンドルするなど、ローダーによって機能は様々
    */
    module: {
      rules: [
        {
          // ローダーの処理対象から外すディレクトリ
          exclude: /node_modules/,
          use: [
            {
              // 利用するローダー
              loader: 'babel-loader',
              // ローダーのオプション
              options: {
                presets: ['react', 'es2015'],
              },
            },
          ],
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' }),
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devServer: {
      historyApiFallback: true,
      contentBase: publidDir,
    },
  },
  {
    mode: 'development',
    entry: {
      style: './stylesheets/index.scss',
    },
    output: {
      path: publidDir,
      publicPath: '/',
      filename: 'bundle.css',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' }),
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin('bundle.css'),
    ],
  },
];
