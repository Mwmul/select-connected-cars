const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      URLLoader = require('url-loader'),
      {CleanWebpackPlugin} = require('clean-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
      entry: ['./src/index.tsx'],
      output: {
            path: path.resolve(__dirname, outputDirectory),
            filename: 'bundle.js'
      },
      module: {
            rules: [
                  {
                        test: /\.tsx?$/,
                        loader: 'ts-loader',
                        exclude: /node_modules/,
                  },
                  {
                        enforce: 'pre',
                        test: /\.js$/,
                        loader: 'source-map-loader'
                  },
                  {
                        test: /\.css$/i,
                        use: ['style-loader', 'css-loader'],
                  },
                  {
                        test: /\.(png|ttf|otf|eot|woff|gif|jp(e*)g|svg)$/,  
                        use: [{
                            loader: require.resolve("file-loader") + "?name=../[path][name].[ext]",
                            options: { 
                                limit: 10000,
                                outputPath: 'images',
                                esModule: false
                            } 
                        }]
                  },
                  {
                        test: /\.m?js$/,
                        // exclude: /(node_modules|bower_components)/,
                        use: {
                          loader: 'babel-loader',
                          options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"]
                          }
                        }
                      }
            ]
      },
      plugins: [
            new CleanWebpackPlugin({
                  cleanStaleWebpackAssets: false,
                  cleanOnceBeforeBuildPatterns: [outputDirectory]
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './src/index.html',
                minify: false
            }),
            // new ExtractTextPlugin('style.css')
      ],
      // devtool: 'source-map',
      resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
}