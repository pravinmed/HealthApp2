var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
console.log(process.env);
module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/client.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
       {test: /(\.css)$/, loaders: ['style', 'css']}
     
      
    ]
  },
  sassLoader: {
  data: '@import "' + path.resolve(__dirname, 'theme/_theme.scss') + '";'
},
resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
},

  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"
  },
  plugins: debug ? [] : [
    new ExtractTextPlugin('react-toolbox.css', { allChunks: true }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
