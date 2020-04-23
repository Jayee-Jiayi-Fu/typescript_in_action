const HtmlWebpackPlugin = require("html-webpack-plugin")
// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const {CheckerPlugin} = require('awesome-typescript-loader')
module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [{
					//ts-loader，配合ForkTsCheckerWebpackPlugin 开启新进程检查类型
					// loader: 'ts-loader',

					// awesome-typescript-loader，配合自带插件 CheckerPlugin 开启新进程检查类型
					loader:'awesome-typescript-loader',
					options:{
						 transpileOnly:true
					}
        }],
        exclude: /nodule_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/tpl/index.html'
		}),
		// new ForkTsCheckerWebpackPlugin()
		new CheckerPlugin()
  ]
}