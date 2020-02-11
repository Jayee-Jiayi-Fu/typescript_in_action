const baseConfig = require("./webpack.base.config")
const devConfig = require("./webpack.dev.config")
const proConfig = require("./webpack.pro.config")
const merge = require("webpack-merge")

let config = merge(process.NODE_ENV === 'development' ? devConfig : proConfig)

module.exports = merge(baseConfig, config)