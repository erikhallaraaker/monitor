import webpack from "webpack";
import ESLintPlugin from "eslint-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import Dotenv from "dotenv-webpack";
import path from "path";

const config: webpack.Configuration = {
    entry: {
        app: path.resolve(__dirname, "src", "index.tsx")
    },
    output: {
        filename: "scripts/[name].[chunkhash:8].js",
        chunkFilename: "scripts/[name].[chunkhash:8].js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript"
                        ]
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            title: "monitor"
        }),
        new ESLintPlugin({
            extensions: ["js", "jsx", "ts", "tsx"]
        }),
        new ForkTsCheckerWebpackPlugin({
            async: false
        }),
        new CleanWebpackPlugin(),
        new Dotenv()
    ]
};

export default config;
