var path = require('path');

module.exports = {
	externals: {
		'cheerio': 'window',
		'react/lib/ExecutionEnvironment': true,
		'react/lib/ReactContext': true,
	},
	context: path.join(__dirname, 'src'),
	devtool:  'inline-sourcemap' ,
	entry: './client.jsx',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0'],
					plugins: ['react-html-attrs', 'transform-class-properties']
				}
			}
		]
	},
	output: {
		path: __dirname + '/src/',
		filename: 'client.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
	plugins: []
};
