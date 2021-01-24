const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");
const LicenseWebpackPlugin = require("license-webpack-plugin").LicenseWebpackPlugin;
const {version, name} = require('./package.json');

module.exports = {
    entry: [
        './src/index.ts'
    ],
    output: {
        filename: 'bundle.js',
        module: false,
        pathinfo: true
    },
    mode: "production",
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            extractComments: false
        })]
    },
    plugins: [
        new LicenseWebpackPlugin(),
        new webpack.BannerPlugin({banner: `${name} v${version}. Copyright (c) 2021 by Pablo Klaschka (MIT Licensed). See main.licenses.txt for licenses of open-source projects used and packaged here.`})
    ],
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    resolve: {
        extensions: [
            '.ts',
            '.tsx',
            '.js'
        ]
    }
}
;
