
var links = require('../../common/links.js');

var footerModule = angular.module('footerM', [])
  .component('footer', {
    templateUrl: links.templatesBasePath + 'footer.html',
    controller: ['$location', function ($location) {
      console.log('footer component init');

      var self = this;

      self.go = function(path){
        console.log('path ' + path);
        $location.path(path);
      }

    }]
  });


module.exports = footerModule;