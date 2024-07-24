const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");
const path = require("path");

module.exports = {
    entry: {
        app: "./src/index.js",
        "assets/js/banner": "./src/assets/js/banner.js",
        "assets/js/tabs": "./src/assets/js/tabs.js",
        "assets/js/upload": "./src/assets/js/upload.js",
        "assets/js/chart": "./src/assets/js/chart.js",
    },

    output: {
        path: __dirname + "/app",
        filename: "[name].js",
        publicPath: "/",
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },

            {
                test: /\.(sa|sc|c)ss$/,

                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/images/[name][ext]",
                },
            },

            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                exclude: /images/,
                type: "asset/resource",
                generator: {
                    filename: "assets/fonts/[name][ext]",
                },
            },

            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            chunks: [
                "app",
                "assets/js/banner",
                "assets/js/tabs",
                "assets/js/upload",
                "assets/js/chart",
            ],
        }),
        new HtmlWebpackPlugin({
            filename: "add-product.html",
            template: "./src/add-product.html",
            chunks: ["app", "assets/js/upload"],
        }),
        new HtmlWebpackPlugin({
            filename: "products.html",
            template: "./src/products.html",
            chunks: ["app"],
        }),
        new HtmlWebpackPlugin({
            filename: "users.html",
            template: "./src/users.html",
            chunks: ["app"],
        }),
        new HtmlWebpackPlugin({
            filename: "orders.html",
            template: "./src/orders.html",
            chunks: ["app"],
        }),
        new HtmlWebpackPlugin({
            filename: "add-user.html",
            template: "./src/add-user.html",
            chunks: ["app", "assets/js/upload"],
        }),
        // components //
        new HtmlWebpackPlugin({
            filename: "components/button.html",
            template: "./src/components/button.html",
            chunks: ["app"],
        }),
        new HtmlWebpackPlugin({
            filename: "components/textfield.html",
            template: "./src/components/textfield.html",
            chunks: ["app"],
        }),
        new HtmlWebpackPlugin({
            filename: "components/card.html",
            template: "./src/components/card.html",
            chunks: ["app"],
        }),
        new HtmlWebpackPlugin({
            filename: "components/banner.html",
            template: "./src/components/banner.html",
            chunks: ["app", "assets/js/banner"],
        }),
        new HtmlWebpackPlugin({
            filename: "components/list.html",
            template: "./src/components/list.html",
            chunks: ["app"],
        }),
        new HtmlWebpackPlugin({
            filename: "components/tabs.html",
            template: "./src/components/tabs.html",
            chunks: ["app", "assets/js/tabs"],
        }),
        new HtmlWebpackPlugin({
            filename: "components/upload.html",
            template: "./src/components/upload.html",
            chunks: ["app", "assets/js/upload"],
        }),
        new HtmlWebpackPlugin({
            filename: "components/help.html",
            template: "./src/components/help.html",
            chunks: ["app"],
        }),
        new HtmlWebpackPlugin({
            filename: "components/summary.html",
            template: "./src/components/summary.html",
            chunks: ["app"],
        }),
        new HtmlWebpackPlugin({
            filename: "components/actions.html",
            template: "./src/components/actions.html",
            chunks: ["app"],
        }),
        new HtmlWebpackPlugin({
            filename: "components/sidebar.html",
            template: "./src/components/sidebar.html",
            chunks: ["app"],
        }),
        new HtmlWebpackPlugin({
            filename: "components/table.html",
            template: "./src/components/table.html",
            chunks: ["app"],
        }),
        new HtmlWebpackPlugin({
            filename: "components/chart.html",
            template: "./src/components/chart.html",
            chunks: ["app", "assets/js/chart"],
        }),
        new HtmlWebpackPlugin({
            filename: "form.html",
            template: "./src/components/form.html",
            chunks: ["app"],
        }),

        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename: "assets/css/style.css",
        }),

        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, "./src/components/help.html"),
            location: "help",
            template_filename: ['index.html', 'add-product.html', 'products.html', 'users.html', 'odrers.html', 'add-user.html'],
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, "./src/components/summary.html"),
            location: "summary",
            template_filename: ['index.html'],
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, "./src/components/actions.html"),
            location: "actions",
            template_filename: ['index.html'],
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, "./src/components/banner.html"),
            location: "banner",
            template_filename: ['index.html'],
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, "./src/components/chart.html"),
            location: "chart",
            template_filename: ['index.html', 'orders.html'],
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, "./src/components/list.html"),
            location: "list",
            template_filename: ['index.html'],
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, "./src/components/sidebar.html"),
            location: "sidebar",
            template_filename: ['index.html', 'add-product.html', 'products.html', 'users.html', 'orders.html', 'add-user.html'],
        }),
    ],

    optimization: {
        minimizer: [new CssMinimizerPlugin()],
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "app"),
        },
        compress: true,
        port: 9010,
        devMiddleware: {
            writeToDisk: true,
        },
        open: true,
        hot: false,
    },
};
