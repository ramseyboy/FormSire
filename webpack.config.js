const path = require("path");
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (env) => {
    const isDevBuild = env && env.debug;
    const mode = isDevBuild ? 'development' : 'production';

    return {
        mode: mode,
        entry: { 
            lib: ['./src/index.ts'],
            sample: ['./sample/index.ts'],
        },
        output: {
            path: path.join(__dirname, "./dist/"),
            filename: isDevBuild ? "js/[name].js" : "js/[name].min.js"
        },
        resolve: {
            extensions: [".ts", ".js"],
        },
        module: {
            rules: [
                { 
                    test: /\.ts$/, 
                    include: /src/, 
                    use: 'awesome-typescript-loader?silent=true' },
                {
                    test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2|ico)$/,
                    loader: "file-loader",
                    options: {
                        name: '[name].[ext]'
                    }
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader', options: {
                                    importLoaders: 1,
                                    minimize: !isDevBuild
                                }
                            },
                            'postcss-loader'
                        ]
                    })
                }
            ],
        },
        plugins: [
            new ExtractTextPlugin({
                filename: isDevBuild ? "css/[name].css" : "css/[name].min.css",
                allChunks: true
            })
        ]
    };
};
