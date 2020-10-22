const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const path = require('path')
const PORT = 8080

function resolvePath(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'development',
  output: {
    path: resolvePath('www'),
    filename: '[name].bundle.js',
    publicPath: 'http://localhost:' + PORT + '/www/',
  },
  entry: {
    vendor: './src/vendor.js',
    main: './src/app.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.scss'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolvePath('src'),
      styles: resolvePath('src/assets/scss'),
    },
  },
  devServer: {
    writeToDisk: true,
    hot: true,
    inline: true,
    compress: true,
    historyApiFallback: true,
    publicPath: 'http://localhost:' + PORT + '/www/',
    contentBase: resolvePath('www'),
    watchOptions: {
      poll: true,
    },
    port: PORT,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: [resolvePath('src')],
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          fallback: {
            loader: 'file-loader',
            options: {
              name: 'assets/images/[name].[ext]',
            },
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/i,
        loader: 'url-loader',
        options: {
          limit: 100,
          fallback: {
            loader: 'file-loader',
            options: {
              name: 'assets/fonts/[name].[ext]',
            },
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify('development'),
    }),
    // new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.html',
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'app.css',
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     { from: resolvePath('static'), to: resolvePath('www/static') },
    //   ],
    // }),
  ],
}
