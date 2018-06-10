//helper for path
const path = require('path');

const config = {
    entry: {
        "index.js": "./src/index.js",
        "marker.js": "./src/marker.js"
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name]'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/
            }
        ]
    }
};

module.exports = config;