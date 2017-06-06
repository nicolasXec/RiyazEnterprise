
var links = require('../../common/links.js');

var headerModule = angular.module('headerM', [])
  .component('header', {
    templateUrl: links.templatesBasePath + 'header.html',

    controller: ['$mdPanel', '$location', function ($mdPanel, $location) {
      console.log('header component init');

      var self = this;

      self.fixedNav = false;
      self.scrollEnter = false;

      // self.mdPanelRef = self.$mdPanel.create('menuPreset', {
      //   id: 'menu'
      // });

      self.home = function(){
        console.log('redirect home click');
        $location.path('/home');
      }

      // self.appHover = function(){
      //   console.log("app hover init");
      // }

      self.enquiry = function(){
        console.log('open enquiry form');
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
