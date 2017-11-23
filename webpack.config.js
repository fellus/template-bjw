var webpack = require('webpack');


const app = {
    entry: [
        __dirname + '/src/js/script.js'
    ],
    output: {
        path: __dirname + '/root/js/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const bootstrap = {
    entry: [
        __dirname + '/node_modules/bootstrap/dist/css/bootstrap.css'
    ],
    output: {
        path: __dirname + '/root/css/',
        filename: 'bootstrap.css'
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("css-loader")
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'file-loader?name=../font/[name].[ext]'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("../css/bootstrap.css")
    ]
};

module.exports = [app, bootstrap];