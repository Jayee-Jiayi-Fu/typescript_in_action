const baseConfig = require("./webpack.base.config")
const devConfig = require("./webpack.dev.config")
const proConfig = require("./webpack.pro.config")
const merge = require("webpack-merge")


module.exports = (env,argv)=>{
    let config = merge(argv.mode === 'development' ? devConfig : proConfig)
    return merge(baseConfig, config)
}