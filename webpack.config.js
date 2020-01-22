const {resolve} = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    indexComponent: resolve(__dirname, 'src', 'views', 'index-component', 'index-component.js'),
    homeComponent: resolve(__dirname, 'src', 'views', 'home-component', 'home-component.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'public','assets' , 'dist')
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },
  plugins: [
    new CopyPlugin([])
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ],
    // splitChunks: {
    //   chunks: 'all'
    // }
  },
  watch: true,
  devtool: 'inline-source-map',
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    compress: true,
    port: 5555,
  }
};