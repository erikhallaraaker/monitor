import webpack from "webpack";
import { merge } from "webpack-merge";

import common from "./webpack.common";

const prodConfig: webpack.Configuration = {
    mode: "production",
    optimization: {
        mergeDuplicateChunks: true,
        runtimeChunk: {
            name: (entrypoint: webpack.EntryObject): string => `runtime~${entrypoint.name}`
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
                commons: {
                    test: /[/\\]node_modules[/\\]/,
                    name (module: webpack.Module): string {
                        const [, packageName] = module.context?.match(/[/\\]node_modules[/\\](.*?)([/\\]|$)/) as RegExpMatchArray;

                        return `npm.${packageName.replace("@", "")}`;
                    },
                    chunks: "all"
                }
            }
        }
    }
};

export default merge(common, prodConfig);
