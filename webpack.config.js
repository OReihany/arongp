require('dotenv').config();
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin').default;
module.exports = (env, args) => {
	function hashcode(str) {
		let hash = 0, i, chr;
		for (i = 0; i < str.length; i++) {
			chr = str.charCodeAt(i);
			hash = ((hash << 5) - hash) + chr;
			hash |= 0;
		}
		return hash;
	}

	const envVariables = {
		...Object.keys(process.env).reduce((acc, key) => {
			if (key.startsWith('REACT_')) {
				acc[key] = process.env[key];
			}
			return acc;
		}, {}),
		NODE_ENV: args.mode,
	};
	return {
		mode: args.mode,
		entry: {
			desktop: [
				...(process.env.NODE_ENV !== 'production' ? [
					path.resolve(__dirname, 'src/dev.ts'),
				] : []),
				path.resolve(__dirname, 'src/preload.ts'),
				path.resolve(__dirname, 'src/platforms/desktop/client.tsx'),
			],
			dashboard: [
				...(process.env.NODE_ENV !== 'production' ? [
					path.resolve(__dirname, 'src/dev.ts'),
				] : []),
				path.resolve(__dirname, 'src/preload.ts'),
				path.resolve(__dirname, 'src/platforms/dashboard/client.tsx'),
			]
		},
		resolve: {
			plugins: [new TsconfigPathsPlugin()],
			extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
			alias: {
				'react-router-dom': path.resolve('./node_modules/react-router-dom')
			}
		},
		externals: {
			'react': 'React',
			'react-dom': 'ReactDOM',
			'react-router-dom': 'ReactRouterDOM',
			'axios': 'axios',
			'antd': 'antd',
		},
		devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : undefined,
		watchOptions: {
			ignored: /node_modules|src\/locale/,
		},
		module: {
			rules: [
				{
					test: /\.tsx?/,
					exclude: /node_modules/,
					use: [
						'ts-loader',
						{
							loader: path.resolve(__dirname, './translate'),
							options: {
								localePath: path.resolve(__dirname, 'src/locale'),
								languages: ['fa', 'en']
							}
						}
					],
				},
				{
					test: /\.(svg|webp|png|jpeg|gif|bmp|jpg)$/i,
					exclude: /node_modules/,
					use: [
						{
							loader: 'file-loader',
							options: {
								outputPath: 'images',
								name: '[path][name].[ext]'
							}
						}
					]
				},
				{
					test: /\.(mp4|webm)$/i,
					exclude: /node_modules/,
					use: [
						{
							loader: 'file-loader',
							options: {
								outputPath: 'videos',
								name: '[path][name].[ext]'
							}
						}
					]
				},
				{
					test: /\.(ttf|eot|woff2|woff)$/i,
					exclude: /node_modules/,
					use: [
						{
							loader: 'file-loader',
							options: {
								outputPath: 'fonts',
								name: '[path][name].[ext]'
							}
						}
					]
				},
				{
					test: /\.(sass|scss|css)$/,
					use: [
						process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
						'css-loader?url=false',
						{
							loader: 'postcss-loader',
							options: {
								postcssOptions: {
									plugins: [
										require('autoprefixer')(),
										require('postcss-rtlcss')({
											useCalc: true,
											source: 'rtl'
										}),
									]
								}
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sassOptions: {
									includePaths: [
										path.resolve(__dirname, 'src'),
									],
								},
								additionalData: '@import "variables";'
							}
						}
					],
					exclude: /\.module\.(sass|scss|css)$/,
				},
				{
					test: /\.module\.(sass|scss|css)$/,
					use: [
						process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
						{
							loader: "css-loader",
							options: {
								modules: {
									localIdentContext: path.resolve(__dirname, "src"),
									getLocalIdent: (context, localIdentName, localName, options) => {
										const basePath = path.resolve(__dirname, 'src');
										const p = context['resourcePath'].substr(basePath.length);
										const v = /^\/?(.+\/)*(.*)\.(sass|scss|css)$/.exec(p)[2].replace(/\./g, '-');
										return v + '__' + localName + '--' + hashcode(p);
									},
								},
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								postcssOptions: {
									plugins: [
										require('autoprefixer')(),
										require('postcss-rtlcss')({
											useCalc: true,
										}),
									]
								}
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sassOptions: {
									includePaths: [
										path.resolve(__dirname, 'src'),
									],
								},
								additionalData: '@import "./variables";'
							}
						}
					]
				},
			]
		},
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: '[name].js',
			publicPath: '/',
		},
		plugins: process.env.NODE_ENV !== 'production' ? [
			new webpack.EnvironmentPlugin(envVariables),
			new webpack.HotModuleReplacementPlugin(),
		] : [
			new webpack.EnvironmentPlugin(envVariables),
			new MiniCssExtractPlugin({
				filename: '[name].css',
			}),
		]
	}
};