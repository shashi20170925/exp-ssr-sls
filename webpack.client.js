const merge=require('webpack-merge');
const webpackBase=require('./webpack.base.js');
const Path = require('path');

const outPath = Path.join(__dirname, 'public');
const sourcePath = Path.join(__dirname, './src/client');



const config=

 {
  context: sourcePath,
  entry: {
      main: ['babel-polyfill', './index.tsx']
   
  },
  output: {
    path: outPath,
    publicPath: outPath,
    filename: 'bundle.js',
  },
 // target: 'browser',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    // Fix webpack's default behavior to not load packages with jsnext:main module
    // https://github.com/Microsoft/TypeScript/issues/11677
    mainFields: ['browser', 'main']
  }
};

module.exports=merge(webpackBase, config);
