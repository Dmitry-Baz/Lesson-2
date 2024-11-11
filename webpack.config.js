const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');  // Не забудьте добавить этот импорт

module.exports = ({ development }) => ({
    mode: development ? 'development' : 'production',
    entry: path.join(__dirname, 'index.js'),  // Используйте path.join
    devServer: {
        static: {  // Измените contentBase на static
            directory: path.join(__dirname, 'dist'),  // Укажите директорию
        },
        open: true,
        compress: true,
        port: 8080,
    },
    output: {
        path: path.join(__dirname, 'dist'),  // Используйте path.join
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',  // Исправлено с assets/resource на asset/resource
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
                type: 'asset/inline',  // Исправлено с assets/inline на asset/inline
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
});