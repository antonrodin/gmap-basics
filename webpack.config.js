//helper for path
const path = require('path');

const config = {
    //Entry .js file, somekind like bootstrap
    entry: "./src/index.js",
    output: {
        
        //Global route for working directory
        path: path.resolve(__dirname, 'build'),

        //Our final file, the conventino is call it bundle.js
        filename: "bundle.js"
    }
};

//Also we should export that config
module.exports = config;