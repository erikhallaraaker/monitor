import webpack from "webpack";
import { merge } from "webpack-merge";
import path from "path";

import common from "./webpack.common";

const devConfig: webpack.Configuration = {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        historyApiFallback: true,
        clientLogLevel: "warning",
        port: 3000,
        hot: true
    }
};

export default merge(common, devConfig);
