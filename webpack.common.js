const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const createStyledComponentsTransformer = require("typescript-plugin-styled-components")
    .default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
    entry: "./src/components/index.tsx",
    target: "web",
    mode: "development",
    output: {
        filename: "[name].[hash].bundle.js",
        path: path.resolve(__dirname, "build"),
    },
    resolve: {
        modules: ["src", "node_modules"],
        alias: {
            components: path.resolve(__dirname, "src/components"),
            // Add aliases here if needed -->  `alias: path.resolve(__dirname, "src/alias-path"),`
        },
        extensions: [
            ".tsx",
            ".ts",
            ".js",
            ".jsx",
            ".svg",
            ".css",
            ".json",
            ".mdx",
        ],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    getCustomTransformers: () => ({
                        before: [styledComponentsTransformer],
                    }),
                },
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(svg|png|jpg|gif|jpeg|ttf)$/,
                use: ["file-loader"],
            },
            {
                test: /\.mdx?$/,
                use: ["babel-loader", "@mdx-js/loader"],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Get GraphQL Schema",
            template: __dirname + "/public/index.html",
            inject: "body",
            filename: "index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
        new HtmlWebpackPlugin({
            template: __dirname + "/public/index.html",
            favicon: "./src/assets/images/favico-36x36.png",
        }),
    ],
    devServer: {
        port: 1234,
        stats: "errors-only",
        hot: true,
        writeToDisk: true,
    },

    performance: {
        hints: false,
    },
    stats: {
        modules: false,
        warnings: false,
    },
};
