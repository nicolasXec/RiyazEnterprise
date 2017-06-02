
var links = require('../../common/links.js');

var homeModule  = angular.module('headerM', [])
      .component('header', {
        templateUrl: links.templatesBasePath + 'header.html',
        controller: ['$location', function($location){
            console.log('header component init');

      }]
    });