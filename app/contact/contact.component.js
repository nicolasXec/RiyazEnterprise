var links = require("../common/links.js");

var contactModule = angular.module("contactM", [])
.component('contact',{
  templateUrl : links.templatesBasePath + "contact.html"
, controller : ['$scope' , function($scope){
  console.log("contact controler init");
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
