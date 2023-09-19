const {resolve} = require('path');
const webpackNodeExternals = require('webpack-node-externals')


module.exports = {
  mode: 'development',

  entry: './src/client.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-runtime']
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ]
  }
}