import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
    context: path.resolve(__dirname, 'app/js'),
    entry: './entry.js',
    output: {
      path: path.resolve(__dirname, 'app/dist'),
      filename: 'app.js'
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          },
          include: [
            path.resolve(__dirname, 'app/js'),
          ]
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract("style", "css", "sass")
        }
      ]
    },
    sassLoader: {
      includePaths: [ path.resolve(__dirname, "app/css") ]
    },
    plugins: [
       new ExtractTextPlugin("app.css")
    ]
  }
