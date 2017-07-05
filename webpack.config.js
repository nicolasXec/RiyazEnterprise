var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var htmlMinifier = require('html-minifier').minify
var PostProcessHtmlMinify = require('./PostProcessHtmlMinifyPlugin.js');

const path = require('path');

var devMode = true;
var _compress = false;
var _sourceMaps = false;

//TODO need to figure our how to load the vendor files externaly from public cdns for faster loading
// or find a way to split the js in to chunks

module.exports = {
  context: __dirname, //means the current directory path where webpack is installed
  entry: {
     app: ['./app/app.js'] //entry point for the app
    ,vendor: ['angular']
    //these files will be included in vendor bundle
    // if cds network is used then files can be made external
  },
  devtool: 'source-map',
  watch:true,  // recompile on js changes
  output: {
    //path: './public/js',
    path: path.resolve(__dirname, "public/js"),
    filename: '[name].js'
  },
 plugins: [
   new webpack.optimize.CommonsChunkPlugin({
      name : "vendor"
     //,filename : "vendor.js"
     ,minChunks: Infinity
   })

   // html plugin to add templates to one file
   ,new HtmlWebpackPlugin({
      template : path.resolve(__dirname, "app/common") + "/index_template.ejs"
     ,filename : path.resolve(__dirname, "public") + "/index.html"
     ,minify : {
           collapseWhitespace: true,
           removeComments: true,
           removeRedundantAttributes: true,
           removeScriptTypeAttributes: true,
           removeStyleLinkTypeAttributes: true,
           processScripts: ['text/ng-template'] //minify angular templates also
        }
     //custom properties
     ,rootPath: path.resolve(__dirname, "app")
   })

 // , new PostProcessHtmlMinify()  //minify options are set inside this

  //used during productions builds to compress js
   ,new webpack.optimize.UglifyJsPlugin({
         compress: _compress
        ,sourceMap: _sourceMaps
        ,drop_console: devMode?false:true
        ,beautify: devMode?false:false
        ,comments: devMode?true:false //preserve comments
        ,mangle:false
        // ,mangle: {
        //     //  // Don't mangle $
        //     //  except: ['$']
        //     //  // Don't care about IE8
        //     // ,screw_ie8 : true
        //     // // Don't mangle function names
        //     // ,keep_fnames: true
        // }
   })
 ]
};
