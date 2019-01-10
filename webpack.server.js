const merge=require('webpack-merge');
const webpackBase=require('./webpack.base.js');
const webpackNodeExternals=require('webpack-node-externals');

const Path = require('path');
const isProduction = process.argv.indexOf('-p') >= 0;
const outPath = Path.join(__dirname, 'server-build');
const sourcePath = Path.join(__dirname, './src');

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
  target: 'node',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    // Fix webpack's default behavior to not load packages with jsnext:main module
    // https://github.com/Microsoft/TypeScript/issues/11677
    mainFields: ['browser', 'main']
  }  ,
  externals:[webpackNodeExternals()],
};


module.exports=merge(webpackBase, config);

