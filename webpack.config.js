const path = require("path")

module.exports = {
    mode: "production",
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        configFile: path.resolve(__dirname, "./tsconfig.json")
                    }
                },
                exclude: /node_modules/,
            }
        ]
    },
    output: {
        filename: "index.min.js",
        libraryTarget: 'commonjs'
    }
}
