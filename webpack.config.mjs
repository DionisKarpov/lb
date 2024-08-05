import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

export default {
	mode,
	entry: ['./src/index.js', './src/styles/styles.scss'],
	output: {
		filename: 'main.js',
		path: path.resolve(path.dirname('./'), 'build'),
		assetModuleFilename: 'images/[hash][ext][query]'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.s?css$/,
				use: [
					mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(phg|jpe?g|gif|svg)$/i,
				type: 'asset/resource'
			},
			{
				test: /\.html$/,
				use: 'html-loader'
			}
	
		]
	},
	devServer: {
		static: './build',
		hot: true,
	},
	devtool: mode === 'production' ? false : 'source-map',
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new HtmlWebpackPlugin({
			template: './src/article.html',
			filename: 'article.html'
		}),
		new HtmlWebpackPlugin({
			template: './src/opinion.html',
			filename: 'opinion.html'
		}),
		new MiniCssExtractPlugin()
	]
}