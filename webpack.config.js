const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv')

// Build directory is where the bundle file will be placed
const BUILD_DIR = path.resolve(__dirname, 'client/dist');
// App directory is where all of your raw JSX files will be placed
const APP_DIR = path.resolve(__dirname, 'client/src');

const config = {
  entry: APP_DIR + '/index.jsx',
  module: {
    rules: [{
        test: /\.(jsx)$/,
        include: APP_DIR,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                "targets": "defaults"
              }],
              '@babel/preset-react'
            ]
          }
        }]
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
      }]
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
      // 'process.env.mongoDBUser': JSON.stringify(process.env.mongoDBUser),
      // 'process.env.mongoDBPW': JSON.stringify(process.env.mongoDBPW),
      // 'process.env.mongoDBPW': JSON.stringify(process.env.mongoDBPW)
    })
  ]
};

module.exports = config;