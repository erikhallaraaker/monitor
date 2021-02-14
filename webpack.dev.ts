import webpack from "webpack";
import { merge } from "webpack-merge";
import path from "path";

import common from "./webpack.common";

const devConfig: webpack.Configuration = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    devtool: "inline-source-map",
    stats: "normal",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        historyApiFallback: true,
        clientLogLevel: "warn",
        port: 3000,
        hot: true,
        overlay: true,
        watchContentBase: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
};

export default merge(common, devConfig);
