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
require('./components/home/home.component.js');
require('./components/contact/contact.component.js');
require('./components/storeLocations/storeLocations.component.js');
require('./components/products/products.component.js');
require('./components/footer/footer.component.js');
require('./components/header/header.component.js');
require('./components/productDetail/productDetail.component.js');

var app = angular.module('webApp', [
  // user components
  'homeM'
  , 'contactM'
  , 'storeLocationsM'
  , 'productsM'
  , 'footerM'
  , 'headerM'
  , 'productDetailM'
  //Material devDependencies
  , 'ngRoute'
  , 'ngAnimate'
  , 'ngAria'
  , 'ngMaterial'
]);


//user defined directives
require('./directives/cardItem/cardItem.directive.js');


//route config section
app.config(['$locationProvider', '$routeProvider', '$mdPanelProvider'
  , function ($locationProvider, $routeProvider, $mdPanelProvider) {

    //self.keepMenuOpenFlag = false;

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
      when('/products', {
        template: '<products></products>'
      }).
      when('/productD', {
        template: '<product-detail></product-detail>'
      }).
      otherwise('/home');
      //EOC route configuration


    //BOC menu configuration

    $mdPanelProvider.definePreset('menuPreset', {
      attachTo: angular.element(document.body),
      // id:'navPanel',
      controllerAs: 'ctrl',
      templateUrl: links.templatesBasePath + 'panel.tmpl.html',
      panelClass: 'menu-panel',
      clickOutsideToClose: true,
      escapeToClose: true,
      //hasBackdrop:true,
      focusOnOpen: false,
      zIndex:80,
      propagateContainerEvents: false,
      groupName: 'menus',
      controller: ['mdPanelRef' , '$location' ,  function(mdPanelRef , $location){
        console.log('menu controller init');

        var _self = this;

        // _self._mdPanel = $mdPanel;
        // _self.mdPanelRef = self._mdPanel.create('menuPreset', {
        //   id: 'menu'
        // });

        _self.menuItems = [
          {title: "Living room",  //main group
           id:1,
           list: [
             {title: "Tables",  //category
              id:1,
              products: [ //products in category
                {name:"Dining", id:1}, {name:"study", id:2}, {name:"drawing", id:3}
              ],
              imgUrl:null},
              {title: "Sofas",  //category
               id:2,
               products: [
                {name:"Sectional", id:1}, {name:"Couches", id:2}, {name:"Corner", id:3}
              ],
              imgUrl:null}
           ]
          },
          {title: "Kitchen",
          id:2,
          list: [
             {title: "Chimneys",
              id:3,
              products: [
                {name:"Faber", id:1}, {name:"sunflame", id:2}, {name:"Kaff", id:3}
              ],
              imgUrl:null}
           ]
          },
          {title: "Bathroom",
          id:3,
          list: [
             {title: "Doors",
              id:4,
              products: [
                {name:"Fibre", id:1}, {name:"Platic", id:2}, {name:"Rubberised", id:3}
              ],
              imgUrl:null}
           ]
          }
        ];

        _self.subItem = _self.menuItems[0].list;

      _self.mainItemClick = function(menuItem){
        console.log('menu item ' + JSON.stringify(menuItem));
        _self.subItem = menuItem.list;

      }

      _self.productViewAll = function(){

        console.log("view all product clicked");
        $location.path('/products');
      }


      _self.productView = function(){

        console.log("product view page clicked");
        $location.path('/productD');
      }

      _self.closePanel = function(){
        console.log("closing panel............");
          _self.mdPanelRef.close();
      };




      _self.panelClick = function ($event) {
        console.log('menu click event ');
        $event.stopPropagation();
        $event.preventDefault();
      }

      //common controller for all menu items
      _self.closeUserMenu = function ($event) {
        console.log("close call init");
        _self.mdPanelRef.close()
          .then(function () {
            console.log("panel closed");
            self.panelOpened = false;
          });

      };

    }]
    });
    //EOC menu configuration

  }])
  .controller('appController', [ '$scope' , function($scope){
    console.log("app conroller intiated yeay!!");

    var self = this;



  }]);

app.directive('scrollFix', ['$window', function ($window) {

  var $win = angular.element($window);
  console.log("scrollfix Directive intiated");

  return {
    scope: {
      fixed: '='
    }
    , restrict: 'EA'
    , controller: ['$mdPanel' ,  function($mdPanel ){

      var self =  this;    




    }]
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

app.directive('navMenu', ['$q', '$window', '$location', function ($q, $window, $location) {

  console.log("navMenu Directive intiated");

  return {
    restrict: 'EAC'
    ,scope: {
      items: '='
    }
    , templateUrl: links.templatesBasePath + 'navMenu.tpl.html'
    , controllerAs: 'ctrl'
    , controller: ['$mdPanel', '$scope' , function ($mdPanel, $scope) {

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

      self.mouseOver = function($event, item){

          if (!item.hasCollps) {

                      //close the menu
          //TODO this throws exception when panel does not exits, which is the first time
          //or when its routed to second page the first time
          self.mdPanelRef.close();

            return;
          }



          console.log('mouse over');

        var pos = self._mdPanel.newPanelPosition()
          .relativeTo($event.currentTarget)
          .addPanelPosition(self._mdPanel.xPosition.ALIGN_START
          , self._mdPanel.yPosition.ALIGN_TOPS)
          .withOffsetY('58px');

        //make panel animation object
        var panelAnimation = $mdPanel.newPanelAnimation()
          .openFrom($event.currentTarget)
          .duration(280)
          .closeTo($event.currentTarget)
          .withAnimation($mdPanel.animation.FADE);

                  //if panel is not attached, then
        // > on attach, show the panel
        //else
        // > show the panel
        if (!self.mdPanelRef.isAttached) {
          console.log('panel not attached');
          self.mdPanelRef.attach()
          .then(function () {

              console.log('attaching menu panel');
              self.mdPanelRef.updateAnimation(panelAnimation);
              self.mdPanelRef.updatePosition(pos);
              self.mdPanelRef.show();

          });

        } else {

          console.log('show panel directly');
          self.mdPanelRef.updateAnimation(panelAnimation);
          self.mdPanelRef.updatePosition(pos);
          self.mdPanelRef.show();

        }

      }

      // self.mouseover = function($event, item){
      //   self.mdPanelRef.close();
      // }



      //menu item click function
      self.menuClick = function($event, item) {

        //if menu has items then return
        if (item.hasCollps) {
          return;
        }

        console.log('click on menu');

        //if menu does not have items return
        // and set the keepMenuOpenFlag to false, to let the menu close
        //when close intercept promise is resolved
        if (!item.hasCollps) {
          //self.keepMenuOpenFlag = false;

          //close the menu
          //TODO this throws exception when panel does not exits, which is the first time
          //or when its routed to second page the first time
          self.mdPanelRef.close();

          //redirect
          if(item.id == 3){
            //store locations
             $location.path('/location');
          }else if(item.id == 4){
            //contact us
             $location.path('/contact');
          }else if(item.id == 5){
            //about us
             $location.path('/');
          }

          //return;
        }

        // else {
        //   self.keepMenuOpenFlag = true;
        // }

        //stop the event propagation to the "window click" event, which
        //sets self.keepMenuOpenFlag = false;
        //$event.stopPropagation();
        //$event.preventDefault();

        //make panel postion object
        // var pos = self._mdPanel.newPanelPosition()
        //   .relativeTo($event.currentTarget)
        //   .addPanelPosition(self._mdPanel.xPosition.ALIGN_START
        //   , self._mdPanel.yPosition.ALIGN_TOPS)
        //   .withOffsetY('50px');

        // //make panel animation object
        // var panelAnimation = $mdPanel.newPanelAnimation()
        //   .openFrom($event.currentTarget)
        //   .duration(280)
        //   .closeTo($event.currentTarget)
        //   .withAnimation($mdPanel.animation.FADE);

        //a function that returns promise, that rejects when self.keepMenuOpenFlag is true
        // var closePromise = function () {
        //   return $q(function (resolve, reject) {
        //     console.log('promise ' + self.keepMenuOpenFlag);
        //     if (self.keepMenuOpenFlag == true) {
        //       reject();
        //       //dont allow close of panel
        //       //TODO an exception is thrown saying that reject is undefined
        //       // how to implement reject to stop exception being thrown
        //     } else {
        //       resolve();
        //       //proceed as usual
        //     }

        //   });
        // }

        //set the close interceptor, that can reject the panel close opertation
       // self.mdPanelRef.registerInterceptor($mdPanel.interceptorTypes.CLOSE, closePromise);

        //if panel is not attached, then
        // > on attach, show the panel
        //else
        // > show the panel
        // if (!self.mdPanelRef.isAttached) {
        //   console.log('panel not attached');
        //   self.mdPanelRef.attach()
        //   .then(function () {

        //       console.log('attaching menu panel');
        //       self.mdPanelRef.updateAnimation(panelAnimation);
        //       self.mdPanelRef.updatePosition(pos);
        //       self.mdPanelRef.show();

        //   });

        // } else {

        //   console.log('show panel directly');
        //   self.mdPanelRef.updateAnimation(panelAnimation);
        //   self.mdPanelRef.updatePosition(pos);
        //   self.mdPanelRef.show();

        // }

      };
      //EOC user menu section


    }]
    , link: function (scope, element, attrs, ctrl) {


      console.log('link of menu directive');
      var $win = angular.element($window);
      // $win.on('click', function($event){
      //   //read description, above in controller, where its declared
      //   console.log('win click stop event proppgation ' + $event.isPropagationStopped);

      //   ctrl.keepMenuOpenFlag = false;
      // });


    }
  }

}]);
