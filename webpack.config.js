var webpack = require('webpack');


const app = {
    entry: [
        __dirname + '/src/script.js'
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

module.exports = app;