var links = require("../../common/links.js");

var contactModule = angular.module("aboutM", [])
.component('aboutUs',{
  templateUrl : "aboutUs.html"
, controller : ['$scope' , function($scope){
  console.log("about us  controler init");
  var self = this;

  }]
});
