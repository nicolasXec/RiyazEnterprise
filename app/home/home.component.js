
var links = require('../common/links.js');
var homeModule  = angular.module('homeM', [])
      .component('home', {
        templateUrl: links.templatesBasePath + 'home.html'
        ,controller: [ '$scope',
          function homeController ($scope) {
            console.log("hello i am home controller");



            var self = this;

            self.navItems = [
                {name : "Product", hasCollps : true, bold : false}
              , {name : "Featured Brands", hasCollps : true, bold : true}
              , {name : "Store Locations", hasCollps : true, bold : false}
              , {name : "Contact Us", hasCollps : false, bold : false}
              , {name : "About Us", hasCollps : false, bold : false}
            ];





            self.fixedNav = false;






          }]


      });

  module.exports = homeModule;
