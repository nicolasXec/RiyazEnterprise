
var links = require('../common/links.js');
var homeModule  = angular.module('homeM', [])
      .component('home', {
        templateUrl: links.templatesBasePath + 'home.html'
        ,controller: [
          function homeController () {
            console.log("hello i am home controller");

            var self = this;
      
          }]


      });

  module.exports = homeModule;
