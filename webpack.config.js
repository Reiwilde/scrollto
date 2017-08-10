const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    context: path.resolve(__dirname),
    devtool: "source-map",
    entry: path.resolve(__dirname, "src/scrollTo.ts"),
    externals: nodeExternals(),
    module: {
        rules: [{
            test: /\.ts$/,
            use: [{
                loader: "awesome-typescript-loader",
                options: {
                    useBabel: true,
                    babelOptions: {
                        presets: "env",
                    },
                },
            }]
        }],
    },
    output: {
        filename: " [name].js",
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        extensions: [
            ".ts",
        ],
    },
}
