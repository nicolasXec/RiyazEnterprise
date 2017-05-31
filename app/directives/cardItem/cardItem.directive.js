

var webApp = angular.module('webApp');

webApp.directive('CardItem', ['$window' ,function($window){

  var $win = angular.element($window);
    console.log("card Item  Directive intiated");

  return {
    scope : {
        fixed : '='
    }
    , templateUrl: links.templatesBasePath + 'card.tpl.html'
    , restrict: 'EA'
    , link: function($scope, element, attrs){


    }
  }

}])
