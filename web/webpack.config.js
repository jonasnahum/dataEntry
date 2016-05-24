const webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: './public/javascripts/src/main.js',
    output: {
        path: __dirname + '/public/javascripts/lib',
        filename: 'main.min.js',
    },
    module: {
        loaders: [{
            test: /\.js/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            include: __dirname + '/public/javascripts/src',
            query: {presets:["react", "es2015"]}
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]
}