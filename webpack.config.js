
var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
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
	      	exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				  presets: ['react']
			  }
	    }, {
	      	test: /\.css$/,
	      	exclude: /node_modules/,
	      	loader: 'style!css'
	    }, {
	      	test: /\.less$/,
	      	exclude: /node_modules/,
	      	loader: 'style!css!less'
	    },{ 
	      	test: /\.(png|jpg)$/,
	      	exclude: /node_modules/, 
	      	loader: 'url?limit=25000' 	    
	    }]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
};

