
var links = require('../../common/links.js');

var homeModule  = angular.module('footerM', [])
      .component('footer', {
        templateUrl: links.templatesBasePath + 'footer.html',
        controller: ['$location', function($location){
            console.log('footer component init');
      }]
    });