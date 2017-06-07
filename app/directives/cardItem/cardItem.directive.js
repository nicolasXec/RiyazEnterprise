

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
    ,controller: ['$location', function($location){

      var self = this;

      self.showDetails = function(){
        $anchorScroll();
        $location.path('/productD');
      }

    }]
    // , link: function($scope, element, attrs){


    // }
  }

}])
