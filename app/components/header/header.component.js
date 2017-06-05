
var links = require('../../common/links.js');

var headerModule = angular.module('headerM', [])
  .component('header', {
    controllerAs: 'ctrlHeader',
    templateUrl: links.templatesBasePath + 'header.html',

    controller: ['$location' , '$mdPanel', function ($location , $mdPanel) {
      console.log('header component init');


      var self = this;

      self.fixedNav = false;
      self.scrollEnter = false;
      //self._mdPanel = mdPanelRef;

      self._mdPanel = $mdPanel;
      self.mdPanelRef = self._mdPanel.create('menuPreset', {
        id: 'menu'
      });

      self.home = function(){
        $location.path('/home');
      }

      self.appHover = function(){
        console.log("app hover init");
    //  self.mdPanelRef.close();

      //  self.mdPanelRef.close();
      //  self._mdPanel.close({id:"navPanel"});


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
