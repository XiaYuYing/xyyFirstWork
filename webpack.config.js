
var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

module.exports = {
	entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8082',
		path.resolve(__dirname, './app/main.js')
	],
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'bundle.js'
	},
	resolve: {
	    extensions: ['.js', '.jsx']
	},
	module: {
	    rules: [{
	      	test: /\.jsx?$/,
			loader: 'babel-loader',
			query: {
				  presets: ['react']
			}
	    }, {
	      	test: /\.css$/,
	      	loader: 'style-loader!css-loader'
	    }, {
	      	test: /\.less$/,
	      	loader: 'style-loader!css-loader!less-loader'
	    },{ 
	      	test: /\.(png|jpg)$/,
	      	loader: 'url?limit=25000' 	    
		}],
		noParse: [pathToReact]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
};

