var links = require("../../common/links.js");

var contactModule = angular.module("contactM", [])
.component('contact',{
  templateUrl : links.templatesBasePath + "contact.html"
, controller : ['$scope' , function($scope){
  console.log("contact controler init");
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
