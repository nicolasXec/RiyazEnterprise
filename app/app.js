'use strict';

//vendor imports
var angular = require('angular');
require('angular-animate');
require('angular-material');
require('angular-aria');

// var ngTouch = require('angular-touch');
// var carousel  = require('angular-carousel');

console.log('the entry point');

//user defined components
require('./home/home.component.js');


var vrentalApp = angular.module('webApp', [
  //Material devDependencies
  'ngMaterial'

  //other dev dependencies


  // compoents modules
  ,'homeM'
]);


// this sorta copies the contents of the config file here
//require('./app.config.js');
