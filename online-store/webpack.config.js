const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require('eslint-webpack-plugin')

const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

const devServer = (isDev) => !isDev ? {} : {
  devServer: {
    open: true,
    hot: true,
    port: 8000,
    historyApiFallback: true,
  }
};

module.exports = ({ dev }) => ({
  mode: dev ? 'development' : 'production',
  devtool: dev ? 'inline-source-map' : false, 
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: './assets/[name][ext]',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name][ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]'
        }
      },
      {
        test: /\.[tj]s|[tj]sx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
        ],
        exclude: /\.module\.css$/
      },
      {
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: "local",
                getLocalIdent: getCSSModuleLocalIdent,
              },
            }
          }
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
        exclude: /\.module\.scss$/
      },
      {
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: "local",
                getLocalIdent: getCSSModuleLocalIdent,
              },
            }
          },
          "sass-loader",
        ],
        include: /\.module\.scss$/
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: dev ? '[name].css' : '[name].[contenthash].css'
    }),
    new ESLintPlugin({
      extensions: 'ts'
    })
  ],
  ...devServer(dev)
});