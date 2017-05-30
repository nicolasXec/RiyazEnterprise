var links = require('../common/links.js')

var productsModule = angular.module('productsM', [])
.component('product', {
  templateUrl : links.templatesBasePath  + "products.html"
, controller : ['$scope' , function(scope){
    console.log("products controller");
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
