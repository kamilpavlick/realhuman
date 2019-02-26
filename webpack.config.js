const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: __dirname + '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
};
