const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'dev'

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: isDev,
        terserOptions: {},
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.node$/,
        use: 'node-loader',
      },
      {
        test: /\.tsx?|jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/react', '@babel/typescript'],
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]',
        },
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
  },
}
