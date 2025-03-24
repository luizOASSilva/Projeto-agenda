const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public', 'js')
    },
    module: {
        rules: [
            {   
                test: /\.js$/,
                exclude: /node_mules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env']
                        ]
                    }
                }
            }, 
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: '../css/styles.css',  // Nome do arquivo CSS gerado
        }),
    ],
    devtool: 'source-map'
};
