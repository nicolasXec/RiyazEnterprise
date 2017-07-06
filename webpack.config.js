var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//var htmlMinifier = require('html-minifier').minify;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
//var PostProcessHtmlMinify = require('./PostProcessHtmlMinifyPlugin.js');

//TODO put this in a settings object

var devMode = true;
var _compress = false;
var _sourceMaps = false;

const outputPath = path.resolve(__dirname, "public/js");

//css path is relative to the output path
const cssOutputPath =  "../css/";
const cssFileName = "all.css";

//html file relate
const htmlIndexPath = path.resolve(__dirname, "public");
const htmlIndexFileName = "index.html";
const htmlTemplateLocation =  path.resolve(__dirname, "app/common");
const htmlTemplateName = "index_template.ejs";

//TODO make two config files, one for dev and other for prod

//TODO need to figure our how to load the vendor files externaly from public cdns for faster loading
// or find a way to split the js in to chunks

//TODO find way of renaming js and css files to avoid caching

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
    path: outputPath,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [ 'css-loader' ]
          })
       // use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
 plugins: [
   new webpack.optimize.CommonsChunkPlugin({
      name : "vendor"
     //,filename : "vendor.js"
     ,minChunks: Infinity
   })

   // html plugin to add templates to one file
   ,new HtmlWebpackPlugin({
      template : htmlTemplateLocation + "/" + htmlTemplateName
     ,filename : htmlIndexPath + "/" + htmlIndexFileName
    //  ,minify :  {
    //        collapseWhitespace: true,
    //        removeComments: true,
    //        removeRedundantAttributes: true,
    //        removeScriptTypeAttributes: true,
    //        removeStyleLinkTypeAttributes: true,
    //        processScripts: ['text/ng-template'] //minify angular templates also
    //     }
     //custom properties
     //path to folder under whihc all html files need to be taken from
     ,rootPath: path.resolve(__dirname, "app")
   })

   //to build a new css file
   ,new ExtractTextPlugin({
          filename:   cssOutputPath + '/' + cssFileName
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
