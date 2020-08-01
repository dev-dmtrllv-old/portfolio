const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CheckerPlugin, TsConfigPathsPlugin } = require("awesome-typescript-loader")
const path = require("path");

module.exports = {
	entry: "./src/index.tsx",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "awesome-typescript-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			},
		],
	},
	devtool: 'source-map',
	stats: "minimal",
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
		plugins: [
			new TsConfigPathsPlugin()
		]
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	plugins: [
		new CheckerPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "index.html")
		}),
	]
}
