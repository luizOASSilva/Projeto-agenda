const path = require('path');

module.exports = {
    mode: 'production',
    entry: './public/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
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
            }
        ]
    },
    devtool: 'source-map'
};
