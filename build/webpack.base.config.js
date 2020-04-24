const HtmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
module.exports = {
  entry: './src/index.ts',
  output: {
    filename: '[name].[chunkhash:8].js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx','.vue'],
    alias:{
      "vue":"vue/dist/vue.esm.js"
    }
  },
  module: {
    rules: [
      {
        test:/\.vue$/,
        use:[{
          loader:'vue-loader'
        }]
      },
      {
        test: /\.tsx?$/,
        use: [{
          loader: 'ts-loader',
          options:{
            appendTsSuffixTo:[/\.vue$/]
          }
        }],
        exclude: /nodule_modules/
      },
      {
        test:/\.css$/,
        use:["vue-style-loader","css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/tpl/index.html'
    }),
    new VueLoaderPlugin()
  ],
  optimization:{
    splitChunks:{
      chunks:"all"
    }
  }
}