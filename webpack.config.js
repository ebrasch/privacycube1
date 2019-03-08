const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    workflowexample: [
      './src/workflowexample/workflowexample.scss',
    ]
  },
  output: {
    // Output rules
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@styles': path.resolve(__dirname, 'src/styles')
    },
  },
  module: {
    rules: [{
      test: /\.pug$/,
      use: {
        loader: 'pug-loader'
      }
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader',
          options: {
            minimize: true
          }
        }, {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [
              require('autoprefixer')({
                browsers: ['last 2 versions', 'safari >= 8']
              })
            ]
          }
        }, {
          loader: 'sass-loader'
        }],
        fallback: 'style-loader'
      })
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /\.svg$/,
      loader: 'svg-inline-loader',
      options: {
        removeSVGTagAttrs: false
      }
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'file-loader',
        options: {
          context: 'assets/',
          name: '[name].[ext]',
          outputPath: 'assets/'
        }
      }, {
        loader: 'image-webpack-loader',
        options: {
          progressive: true,
          optipng: {
            optimizationLevel: 7,
            interlaced: false
          },
          mozjpeg: {
            quality: 659
          },
          gifsicle: {
            optimizationLevel: 7,
            interlaced: false
          },
          pngquant: {
            quality: '65-90',
            speed: 4
          }
        }
      }]
    }, {
      test: /\.(ttf|eot|woff|woff2)$/,
      exclude: [/assets/],
      use: {
        loader: "file-loader",
        options: {
          name: "fonts/[name].[ext]"
        }
      }
    }]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: 'src/assets',
      to: 'assets'
    }]),
    new ExtractTextPlugin({
      filename: '[name].bundle.css',
      allChunks: true,
    })
  ]
}