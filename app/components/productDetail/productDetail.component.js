var links = require('../../common/links.js')

var productsModule = angular.module('productDetailM', [])
.component('productDetail', {
  templateUrl : "productDetail.html"
, controller : ['anchorSmoothScroll', function(anchorSmoothScroll){
    console.log("product detail controller");

    var self = this;

    self.top = function(eID){
      console.log('scrol top');
       anchorSmoothScroll.scrollTo(eID);
    }

  }]
});
