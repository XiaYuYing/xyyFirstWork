
var path = require('path');

module.exports = {
	entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/main.js')],
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
	      	loader: 'babel-loader'
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
	}
};

