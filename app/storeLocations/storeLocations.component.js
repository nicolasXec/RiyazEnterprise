var links = require('../common/links.js');

var storeLocationsModule = angular.module('storeLocationsM' , [])
.component('locations' , {
  templateUrl : links.templatesBasePath + "storeLocations.html"
, controller : ['$scope' , function($scope){
  var self = this;
            self.navItems = [
                {name : "Product", hasCollps : true, active : false, id:1 }
              , {name : "Featured Brands", hasCollps : true, active : true, id:2 }
              , {name : "Store Location", hasCollps : false, active : false, id:3 }
              , {name : "Contact Us", hasCollps : false, active : false, id:4 }
              , {name : "About Us", hasCollps : false, active : false, id:5 }
            ];

}]

});
