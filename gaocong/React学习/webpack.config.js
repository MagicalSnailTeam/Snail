//dfsdfdfdf
module.exports = {
  entry:"./src/index.js",
  output: {
    filename: './lib/index.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};