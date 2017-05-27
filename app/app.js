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
  , 'ngAnimate'
  , 'ngAria'

  //other dev dependencies


  // compoents modules
  ,'homeM'
]);




angular.module('webApp').directive('scrollFix', ['$window' ,function($window){

  var $win = angular.element($window);
    console.log("directive intitiated first part");

  return {
    restrict: 'E',
    link: function($scope, element, attrs){
      var topClass = "fix-to-top";
      var offsetTop = element.prop('offsetTop');



      $scope.fixedTop = false;

      console.log("directive intitiated"+JSON.stringify($scope.fixedTop));

      $win.on('scroll',function(){
        if($window.pageYOffset >= offsetTop){
          element.addClass(topClass);
          console.log("topClass");
          $scope.fixedTop = true;
          console.log("directive intitiated"+JSON.stringify($scope.fixedTop));

        } else{
          element.removeClass(topClass);
            console.log("remove topClass");
              $scope.fixedTop = false;
              console.log("directive intitiated"+JSON.stringify($scope.fixedTop));
        }

      });

    }
  }

}]);


// this sorta copies the contents of the config file here
//require('./app.config.js');
