const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require('path');

module.exports = {

    entry: './src/index.js',

    output: {

        path: __dirname + '/app',
        filename: 'app.js',
        publicPath: '/',
    },

    module: {

        rules: [

            {
            test: /\.html$/i,
            loader: 'html-loader',
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
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                {
                    loader: 'file-loader',
                },
                ],
            },

            {
                test: /\.(svg|eot|woff|woff2|ttf)$/i,
                exclude: /images/,
                use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: "assets/fonts",
                    }
                },
                ],
            },
        ]
    },

    plugins: [

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'components/button.html',
            template: './src/components/button.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'components/textfield.html',
            template: './src/components/textfield.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'components/card.html',
            template: './src/components/card.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'components/banner.html',
            template: './src/components/banner.html',
        }),

        new CleanWebpackPlugin(),
        
        new MiniCssExtractPlugin({
            filename: "assets/css/style.css"
        })

    ],

    optimization: {
        minimizer: [
        new CssMinimizerPlugin(),
        ],
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
}