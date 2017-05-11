var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public'); //represents the directory path of the bundle file output
var APP_DIR = path.resolve(__dirname, 'src/client/app'); //holds the directory path of the React Application codebase

var config = {
  entry: APP_DIR +'/index.jsx', //the entry file using which the bundling process starts (kind of like the main class in Java)
  output: { //instructs webpack on what to do after the bundling is completed.
    path: BUILD_DIR,
    filename: 'bundle.js' //output the bundled file into this file in the specified directory
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }
};

module.exports = config;
