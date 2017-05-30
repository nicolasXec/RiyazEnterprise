var links = require('../common/links.js');

var storeLocationsModule = angular.module('storeLocationsM' , [])
.component('locations' , {
  templateUrl : links.templatesBasePath + "storeLocations.html"
, controller : ['$scope' , function($scope){
  var self = this;
  self.navItems = [
      {name : "Product", hasCollps : true, bold : false }
    , {name : "Featured Brands", hasCollps : true, bold : true }
    , {name : "Store Locations", hasCollps : true, bold : false }
    , {name : "Contact Us", hasCollps : false, bold : false }
    , {name : "About Us", hasCollps : false, bold : false }
  ];

}]

});
