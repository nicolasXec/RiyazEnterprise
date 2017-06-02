var links = require('../../common/links.js')

var productsModule = angular.module('productDetailM', [])
.component('productDetail', {
  templateUrl : links.templatesBasePath  + "productDetail.html"
, controller : ['$scope' , function(scope){
    console.log("product detail controller");

  }]
});
