const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production', // Включает встроенную оптимизацию библиотек
  entry: './src/index.js',
  output: {
    // 1. Хеширование имен файлов 
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, 
  },
  module: {
    rules: [
      {
        // 4. Интеграция CSS
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        // 3. Работа с изображениями
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        // 2. Поддержка локальных шрифтов
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  // 5. Оптимизация внешних библиотек 
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};