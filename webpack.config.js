const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
      index: '/src/index.js',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  watch: 'true',
  watchOptions: {
    ignored: '**/node_modules/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom Template',
      template: '/src/index.html',
    }),
  ],
  module: {
      rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
      ]
  },
  resolve: {
    extensions: ['.js', '.scss'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};