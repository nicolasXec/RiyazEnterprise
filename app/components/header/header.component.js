
var links = require('../../common/links.js');

var headerModule = angular.module('headerM', [])
  .component('header', {
    templateUrl: links.templatesBasePath + 'header.html',
    controller: ['$location', function ($location) {
      console.log('header component init');


      var self = this;

      self.fixedNav = false;

      self.home = function(){
        $location.path('/home');
      }

      self.navItems = [
        { name: "Product", hasCollps: true, active: false, id: 1 }
        , { name: "Featured Brands", hasCollps: true, active: true, id: 2 }
        , { name: "Store Location", hasCollps: false, active: false, id: 3 }
        , { name: "Contact Us", hasCollps: false, active: false, id: 4 }
        , { name: "About Us", hasCollps: false, active: false, id: 5 }
      ];

    }]
  });

module.exports = headerModule;