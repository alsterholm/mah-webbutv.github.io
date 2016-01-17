module.exports = {
    entry: __dirname + "/assets/js/src/main.js",
    output: {
        path: __dirname + "/assets/js",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    cacheDirectory: true,
                    presets: ["es2015"]
                }
            }
        ]
    }
};
