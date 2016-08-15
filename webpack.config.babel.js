import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
    context: __dirname,
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
          query: { presets: ['es2015', 'react'] }
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract("style", "css!sass"),
          include: [
            path.resolve(__dirname, 'app/css'),
          ]
        }
      ]
    },
    plugins: [
       new ExtractTextPlugin("app.css")
    ]
  }
