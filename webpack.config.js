const path = require('path');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        ecsgame: './testing/ecs/src/main.js'
    },
    stats: {
        errorDetails: true,
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/'),
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
            {
                loader: 'babel-loader',
                options: {
                presets: ['@babel/preset-env'],
                },
            },
            ]
        },
        ],
    },
    optimization: {
        emitOnErrors: false,
    },
    plugins: [
        new ESLintPlugin({
        fix: true,
        }),
    ]
};
