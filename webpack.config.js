var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
//var path = require('path');

const path = require('path');

var devMode = true;

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

  //to copy the templates to public folder
   , new CopyWebpackPlugin(
         [{ context: __dirname, from: './app/**/*', to: '../templates', flatten: true }] //to is relative to webpack output
       ,{ ignore: ['*.js']}
   )
   //compiler options
   ,new webpack.optimize.UglifyJsPlugin({
         compress: devMode?false:false
        ,sourceMap: devMode?false:false
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
