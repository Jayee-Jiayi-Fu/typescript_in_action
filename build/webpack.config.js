const baseConfig = require("./webpack.base.config")
const devConfig = require("./webpack.dev.config")
const proConfig = require("./webpack.pro.config")
const merge = require("webpack-merge")


module.exports = (env,argv)=>{

	console.dir(argv)
	let config = argv.mode === 'devloqqmpment' ? devConfig : proConfig
	return merge(baseConfig,config)
}