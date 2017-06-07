

var links = require("../../common/links.js");

var webApp = angular.module('webApp');

webApp.directive('cardItem', ['$anchorScroll' ,function($anchorScroll){

  // var $win = angular.element($window);
  //   console.log("card Item  Directive intiated");

  return {
    scope : {
        fixed : '='
    }
    , templateUrl: links.templatesBasePath + 'card.tpl.html'
    , controllerAs: 'ctrl'
    , restrict: 'EA'
    ,controller: ['$location', 'anchorSmoothScroll' , function($location , anchorSmoothScroll){

      var self = this;

      self.showDetails = function(eID){

        $location.path('/productD');
         anchorSmoothScroll.scrollTo(eID);
      }

    }]
    // , link: function($scope, element, attrs){


    // }
  }

}])
