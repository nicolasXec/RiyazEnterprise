var links = require('../../common/links.js')

var productsModule = angular.module('productsM', [])
.component('products', {
  templateUrl : links.templatesBasePath  + "products.html"
, controller : ['$scope' , function(scope){
    console.log("products controller");

  }]
});
