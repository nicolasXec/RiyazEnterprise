var links = require('../../common/links.js');

var storeLocationsModule = angular.module('storeLocationsM' , [])
.component('locations' , {
  templateUrl : links.templatesBasePath + "storeLocations.html"
, controller : ['$scope' , function($scope){

}]

});
