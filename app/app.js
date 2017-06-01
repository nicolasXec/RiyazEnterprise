'use strict';

//vendor imports
var angular = require('angular');

require('angular-route');
require('angular-material');
require('angular-animate');
require('angular-aria');

// var ngTouch = require('angular-touch');
// var carousel  = require('angular-carousel');

var links = require('./common/links.js');

console.log('the entry point');

//user defined components
require('./home/home.component.js');
require('./contact/contact.component.js');
require('./storeLocations/storeLocations.component.js');
require('./products/products.component.js');

var app = angular.module('webApp', [
  // user components
  'homeM'
  , 'contactM'
  , 'storeLocationsM'
  , 'productsM'
  //Material devDependencies
  , 'ngRoute'
  , 'ngAnimate'
  , 'ngAria'
  , 'ngMaterial'
]);


//route config section
app.config(['$locationProvider', '$routeProvider', '$mdPanelProvider'
  , function ($locationProvider, $routeProvider, $mdPanelProvider) {

   //BOC route configuration
    $locationProvider.hashPrefix('!');

    $routeProvider.
      when('/home', {
        template: '<home></home>'
      }).
      when('/location', {
        template: '<locations></locations>'
      }).
      when('/contact', {
        template: '<contact></contact>'
      }).
      when('/product', {
        template: '<product></product>'
      }).
      otherwise('/home');
      //EOC route configuration


    //BOC menu configuration
    function menuController(mdPanelRef) {

      var _self = this;

      //common controller for all menu items
      _self.closeUserMenu = function () {
        console.log("close call init");
        _self.mdPanelRef.close()
          .then(function () {
            console.log("panel closed");
            self.panelOpened = false;
          });

      };
    };

    $mdPanelProvider.definePreset('menuPreset', {
      attachTo: angular.element(document.body),
      controller: menuController,
      controllerAs: 'ctrl',
      templateUrl: links.templatesBasePath + 'panel.tmpl.html',
      panelClass: 'menu-panel',
      clickOutsideToClose: true,
      escapeToClose: true,
      focusOnOpen: false,
      zIndex: 100,
      propagateContainerEvents: true,
      groupName: 'menus'
    });
    //EOC menu configuration

  }]);

app.directive('scrollFix', ['$window', function ($window) {

  var $win = angular.element($window);
  console.log("scrollfix Directive intiated");

  return {
    scope: {
      fixed: '='
    }
    , restrict: 'EA'
    , link: function ($scope, element, attrs) {
      var topClass = "fix-to-top";
      var offsetTop = element.prop('offsetTop');

      console.log("directive intitiated" + JSON.stringify($scope.fixed));

      $win.on('scroll', function () {
        if ($window.pageYOffset >= offsetTop) {
          element.addClass(topClass);
          $scope.fixed = true;
        } else {
          element.removeClass(topClass);
          $scope.fixed = false;
        }

      });

    }
  }

}]);

app.directive('navMenu', ['$q', '$window', function ($q, $window) {

  console.log("navMenu Directive intiated");

  return {
    restrict: 'EAC'
    ,scope: {
      items: '='
    }
    , templateUrl: links.templatesBasePath + 'navMenu.tpl.html'
    , controllerAs: 'ctrl'
    , controller: ['$mdPanel', function ($mdPanel) {

      console.log("directive controller intiated yaa");

      var self = this;


      // BOC user menu
      self.isMenuOpen = false;
      self._mdPanel = $mdPanel;
      self.mdPanelRef = self._mdPanel.create('menuPreset', {
        id: 'menu'
      });

      //flag to keep menu open if set to true
      //it return a reject when the close intercept promise resolves
      self.keepMenuOpenFlag = false;

      //menu item click function
      self.showUserMenu = function ($event, item) {

        //if menu does not have items return
        // and set the keepMenuOpenFlag to false, to let the menu close
        //when close intercept promise is resolved
        if (!item.hasCollps) {
          self.keepMenuOpenFlag = false;
          return;
        } else {
          self.keepMenuOpenFlag = true;
        }

        //stop the event propagation to the "window click" event, which 
        //sets self.keepMenuOpenFlag = false;
        $event.stopPropagation();
        $event.preventDefault();

        //make panel postion object
        var pos = self._mdPanel.newPanelPosition()
          .relativeTo($event.currentTarget)
          .addPanelPosition(self._mdPanel.xPosition.ALIGN_START
          , self._mdPanel.yPosition.ALIGN_TOPS)
          .withOffsetY('50px');

        //make panel animation object
        var panelAnimation = $mdPanel.newPanelAnimation()
          .openFrom($event.currentTarget)
          .duration(280)
          .closeTo($event.currentTarget)
          .withAnimation($mdPanel.animation.FADE);

        //a function that returns promise, that rejects when self.keepMenuOpenFlag is true
        var closePromise = function () {
          return $q(function (resolve, reject) {
            if (self.keepMenuOpenFlag == true) {
              reject();
              //dont allow close of panel
              //TODO an exception is thrown saying that reject is undefined
              // how to implement reject to stop exception being thrown
            } else {
              resolve();
              //proceed as usual
            }

          });
        }

        //set the close interceptor, that can reject the panel close opertation
        self.mdPanelRef.registerInterceptor($mdPanel.interceptorTypes.CLOSE, closePromise);

        //if panel is not attached, then
        // > on attach, show the panel
        //else
        // > show the panel
        if (!self.mdPanelRef.isAttached) {

          self.mdPanelRef.attach()
          .then(function () {

              console.log('attaching menu panel');
              self.mdPanelRef.updateAnimation(panelAnimation);
              self.mdPanelRef.updatePosition(pos);
              self.mdPanelRef.show();

          });

        } else {

          self.mdPanelRef.updateAnimation(panelAnimation);
          self.mdPanelRef.updatePosition(pos);
          self.mdPanelRef.show();

        }

      };
      //EOC user menu section


    }]
    , link: function (scope, element, attrs, ctrl) {


      var $win = angular.element($window);
      $win.on('click', function($event){
        //read description, above in controller, where its declared
        ctrl.keepMenuOpenFlag = false;
      });


    }
  }
}]);
