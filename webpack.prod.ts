import webpack from "webpack";
import { merge } from "webpack-merge";
import { SubresourceIntegrityPlugin } from "webpack-subresource-integrity";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

import common from "./webpack.common";

const prodConfig: webpack.Configuration = {
    mode: "production",
    output: {
        crossOriginLoading: "anonymous",
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                ],
            },
        ],
    },
    performance: {
        maxEntrypointSize: 1024000,
        maxAssetSize: 600000,
    },
    optimization: {
        minimize: true,
        minimizer: [
            "...",
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        "default",
                        {
                            discardComments: { removeAll: true },
                        },
                    ],
                },
            }),
        ],
        mergeDuplicateChunks: true,
        runtimeChunk: {
            name: (entrypoint: webpack.EntryObject): string => `runtime~${entrypoint.name}`,
        },
        moduleIds: "deterministic",
        chunkIds: "deterministic",
        splitChunks: {
            automaticNameDelimiter: "~",
            chunks: "all",
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            minChunks: 1,
            minSize: 20000,
            cacheGroups: {
                vendor: {
                    test: /[/\\]node_modules[/\\]/,
                    name (module: webpack.Module): string {
                        const [, packageName] = module.context?.match(/[/\\]node_modules[/\\](.*?)([/\\]|$)/) as RegExpMatchArray;

                        return `npm.${packageName.replace("@", "")}`;
                    },
                    chunks: "all",
                },
                common: {
                    test: /[/\\]src[/\\]components[/\\]/,
                    chunks: "all",
                    minSize: 0,
                },
            },
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles/[name].[chunkhash:8].css",
            chunkFilename: "styles/[id].[contenthash:8].css",
        }),
        new SubresourceIntegrityPlugin(),
        new BundleAnalyzerPlugin(),
    ],
};

export default merge(common, prodConfig);
