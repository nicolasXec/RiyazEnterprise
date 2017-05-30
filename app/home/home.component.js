
var links = require('../common/links.js');
var homeModule  = angular.module('homeM', [])
      .component('home', {
        templateUrl: links.templatesBasePath + 'home.html'
        ,controller: [ '$scope'
        , '$mdPanel'
        , function homeController ($scope, $mdPanel) {
            console.log("hello i am home controller");



            var self = this;






            self.fixedNav = false;

            self.navClicked = function(){
              console.log('nav link clicked');
            };




            self.navItems = [
                {name : "Product", hasCollps : true, bold : false }
              , {name : "Featured Brands", hasCollps : true, bold : true }
              , {name : "Store Locations", hasCollps : true, bold : false }
              , {name : "Contact Us", hasCollps : false, bold : false }
              , {name : "About Us", hasCollps : false, bold : false }
            ];


          }]


      });

  module.exports = homeModule;
