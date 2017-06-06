var links = require("../../common/links.js");

var contactModule = angular.module("contactM", [])
.component('contact',{
  templateUrl : links.templatesBasePath + "contact.html"
, controller : ['$scope' , function($scope){
  console.log("contact controler init");
  var self = this;
          
  }]
});
