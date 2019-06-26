const merge = require('webpack-merge')
const common = require('./webpack.common.config')

module.exports = merge({
  entry: './src/main/index.ts',
}, common)
