
'use strict';

var webpack = require('webpack');
var moment = require('moment');
var packageJson = require('./package.json');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bootstrap-datetimepicker-lunar-plugin.js',
    library: 'bootstrap-datetimepicker-lunar-plugin',
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'stage-1']
        }
      },
      {
        test: /\.css$/,
        loader:  'style-loader!css-loader'
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin(`
    bootstrap-datetimepicker-lunar-plugin v${packageJson.version}

    https://github.com/senntyou/bootstrap-datetimepicker-lunar-plugin

    @senntyou <jiangjinbelief@163.com>

    ${moment().format('YYYY-MM-DD HH:mm:ss')}
    `)
  ],
  externals: {
    jquery : {
      commonjs: 'jquery',
      amd: 'jquery',
      commonjs2: 'jquery',
      root: 'jQuery'
    },
    'bootstrap-datetime-picker' : {
      commonjs: 'bootstrap-datetime-picker',
      amd: 'bootstrap-datetime-picker',
      commonjs2: 'bootstrap-datetime-picker',
      root: 'bootstrap-datetime-picker'
    },
    'lunar-calendar' : {
      commonjs: 'lunar-calendar',
      amd: 'lunar-calendar',
      commonjs2: 'lunar-calendar',
      root: 'LunarCalendar'
    }
  }
};