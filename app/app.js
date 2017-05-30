'use strict';

//vendor imports
var angular = require('angular');

require('angular-material');
require('angular-animate');
require('angular-aria');


// var ngTouch = require('angular-touch');
// var carousel  = require('angular-carousel');

console.log('the entry point');

//user defined components
require('./home/home.component.js');

var links = require('./common/links.js');


var vrentalApp = angular.module('webApp', [

  // compoents modules
   'homeM'

  //Material devDependencies
  , 'ngAnimate'
  , 'ngAria'
  , 'ngMaterial'



  //other dev dependencies



]);

angular.module('webApp').component('app', {
    template:"<home></home>"
   ,controller: [ '$scope'
    , function($scope ){
      console.log("main App controller");

      var self = this;

    //   self.navItems = [
    //     {name : "product", Type : true}
    //   , {name : "About us", Type : false}
    // ];
    // self.tittle="navItems";

 







    }]

})
.directive('scrollFix', ['$window' ,function($window){

  var $win = angular.element($window);
    console.log("scrollfix Directive intiated");

  return {
    scope : {
        fixed : '='
    }
    , restrict: 'EA'
    , link: function($scope, element, attrs){
      var topClass = "fix-to-top";
      var offsetTop = element.prop('offsetTop');





      console.log("directive intitiated"+JSON.stringify($scope.fixed));

      $win.on('scroll',function(){
        if($window.pageYOffset >= offsetTop){
          element.addClass(topClass);
          $scope.fixed = true;






        } else{
          element.removeClass(topClass);
            $scope.fixed = false;


        }

      });

    }
  }

}])
.directive('navMenu', ['$window' ,function($window){

  var $win = angular.element($window);
  console.log("navMenu Directive intiated");

  return {
    scope: {
      items : '='
    }
    , restrict: 'EAC'
    , templateUrl: links.templatesBasePath + 'navMenu.tpl.html'
    , link: function(scope, element, attrs){
      // $timeout(function(){
      //             console.log(element[0].querySelector('.md-button'));
      //            });



    // navLink.on('mouseover',function(){
    // console.log("on mouse over");
    // // var offsetLeft = element[0].offsetLeft;
    // // console.log("element offset left:"+ offsetLeft);
    //
    // });


    }
  }

}]);




// this sorta copies the contents of the config file here
//require('./app.config.js');
