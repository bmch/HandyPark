const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PATH_SOURCE = path.join(__dirname, './src');
const PATH_DIST = path.join(__dirname, './dist');

module.exports = (env) => {
  const environment = env.environment;
  const isProduction = environment === 'production';
  const isDevelopment = environment === 'development';

  return {
    mode: environment,
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      contentBase: PATH_DIST,
      host: '0.0.0.0',
      port: 8080,
      historyApiFallback: true,
      overlay: {
        errors: true,
        warnings: true,
      },
    },
    entry: [path.join(PATH_SOURCE, './index.js')],
    output: {
      //path: PATH_DIST,
      //filename: 'js/[name].[hash].js',
      // `filename` provides a template for naming your bundles (remember to use `[name]`)
      filename: '[name].bundle.js',
      // `chunkFilename` provides a template for naming code-split bundles (optional)
      chunkFilename: '[name].bundle.js',
      // `path` is the folder where Webpack will place your bundles
      path: PATH_DIST,
      // `publicPath` is where Webpack will load your bundles from (optional)
      // publicPath: 'dist/',
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    debug: false,
                    useBuiltIns: 'usage',
                    corejs: 3,
                  },
                ],
                '@babel/preset-react',
              ],
            },
          },
        },
        {
          test: /\.s?css$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader'],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(PATH_SOURCE, './index.html'),
      }),
      new Dotenv(),
      new DynamicCdnWebpackPlugin(),
    ],
  };
};
