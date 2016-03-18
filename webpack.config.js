var HtmlWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginComplexConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/complex.html',
  filename: 'complex.html',
  inject: 'body'
});

var HTMLWebpackPluginSimpleConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/simple.html',
  filename: 'simple.html',
  inject: 'body'
});

module.exports = {
	entry: [
		'./app/index.js'
	],
	module: {
		loaders: [
			{test: /\.js$/, include: __dirname + '/app', loader: "babel-loader"}
		]
	},
	output: {
		filename: "index_bundle.js",
		path: __dirname + '/dist'
	},
	plugins: [HTMLWebpackPluginComplexConfig, HTMLWebpackPluginSimpleConfig]
};