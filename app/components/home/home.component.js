
var links = require('../../common/links.js');
var homeModule = angular.module('homeM', [])
  .component('home', {
    templateUrl: links.templatesBasePath + 'home.html'
    , controller: ['$scope'
      , '$mdPanel'
      , function homeController($scope, $mdPanel) {
        console.log("hello i am home controller");

        var self = this;

        self.fixedNav = false;

        self.navClicked = function () {
          console.log('nav link clicked');
        };

        self.navItems = [
          { name: "Product", hasCollps: true, active: false, id: 1 }
          , { name: "Featured Brands", hasCollps: true, active: true, id: 2 }
          , { name: "Store Location", hasCollps: false, active: false, id: 3 }
          , { name: "Contact Us", hasCollps: false, active: false, id: 4 }
          , { name: "About Us", hasCollps: false, active: false, id: 5 }
        ];

      }]


  });

module.exports = homeModule;
