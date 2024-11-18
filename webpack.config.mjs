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
		new HtmlWebpackPlugin({
			template: './src/topics.html',
			filename: 'topics.html'
		}),
		new HtmlWebpackPlugin({
			template: './src/tag.html',
			filename: 'tag.html'
		}),
		new HtmlWebpackPlugin({
			template: './src/author.html',
			filename: 'author.html'
		}),
		new HtmlWebpackPlugin({
			template: './src/person.html',
			filename: 'person.html'
		}),
		new HtmlWebpackPlugin({
			template: './src/team.html',
			filename: 'team.html'
		}),
		new HtmlWebpackPlugin({
			template: './src/main.html',
			filename: 'main.html'
		}),
		new HtmlWebpackPlugin({
			template: './src/media-kit.html',
			filename: 'media-kit.html'
		}),
		new MiniCssExtractPlugin()
	]
}