var links = require('../../common/links.js')

var productsModule = angular.module('productsM', [])
.component('product', {
  templateUrl : links.templatesBasePath  + "products.html"
, controller : ['$scope' , function(scope){
    console.log("products controller");

  }]
});
