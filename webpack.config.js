const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


// Constant with our paths
const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'),
    PUBLIC: path.resolve(__dirname, 'public')
};

// Webpack configuration
module.exports = {
    entry: [path.join(paths.SRC, 'app.js'), path.join(paths.PUBLIC, 'css/style.scss')],
    output: {
        path: paths.DIST,
        filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.PUBLIC, 'index.html')
        }),
        new ExtractTextPlugin('style.bundle.css'),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    use: 'css-loader',
                }),
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({use: [{
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]}),
            },
            {
                test: /\.(png|jpg|gif|svg|ico|pdf)$/,
                use: [
                    'file-loader?name=[name].[ext]'  // <-- retain original file name',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};
