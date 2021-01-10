const TerserPlugin = require("terser-webpack-plugin");
const WebpackLicensePlugin = require("webpack-license-plugin");

module.exports = {
    entry: [
        './src/index.ts'
    ],
    output: {
        filename: 'bundle.js',
        module: false,
        pathinfo: true
    },
    mode: "development",
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            extractComments: false
        })]
    },
    plugins: [
        new WebpackLicensePlugin({
            licenseOverrides: {'dialog-polyfill@0.5.5': 'BSD-3-Clause'}
        })
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
