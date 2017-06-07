
var links = require('../../common/links.js');
var homeModule = angular.module('homeM', [])
  .component('home', {
    templateUrl: links.templatesBasePath + 'home.html'
    , controller: ['$scope', '$location'
      , '$mdPanel', '$anchorScroll'
      , function homeController($scope, $location, $mdPanel, $anchorScroll) {
        console.log("hello i am home controller");

        var self = this;

        self.fixedNav = false;

        self.navClicked = function () {
          console.log('nav link clicked');
        };

        self.showDetails = function(){
          $anchorScroll();
          $location.path('/productD');
        }
        

        $scope.carouselIndex = 0;

        $scope.slides = [
          { "id": 1, "img": "images/homeBanner.jpg" }
          , { "id": 2, "img": "images/homeBanner1.jpg" }
          , { "id": 3, "img": "images/homeBanner2.jpg" }
        ];

        self.image1 = links.imageBasePath + 'homeBanner.jpg';
        self.image2 = links.imageBasePath + 'homeBanner1.jpg';
        self.image3 = links.imageBasePath + 'homeBanner2.jpg';

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
