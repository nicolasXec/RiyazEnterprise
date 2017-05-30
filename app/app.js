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
require('./storeLocations/storeLocations.component.js')




var vrentalApp = angular.module('webApp', [
  // user components
    'homeM'
  , 'contactM'
  , 'storeLocationsM'
  //Material devDependencies
  , 'ngRoute'
  , 'ngAnimate'
  , 'ngAria'
  , 'ngMaterial'
]);

vrentalApp.config(['$locationProvider', '$routeProvider'
      , function($locationProvider, $routeProvider){

   $locationProvider.hashPrefix('!');

   //router configs
   $routeProvider.
        when('/home', {
          template: '<home></home>'
        }).
        when('/location', {
           template: '<locations></locations>'
        }).
        otherwise('/home');

  console.log('config');

}]);

// angular.module('webApp').component('app', {
//     template:"<body><locations></locations></body>"
//    ,controller: [ '$scope'
//     , function($scope ){
//       console.log("main App controller");

//       var self = this;

//     //   self.navItems = [
//     //     {name : "product", Type : true}
//     //   , {name : "About us", Type : false}
//     // ];
//     // self.tittle="navItems";









//     }]

// })
vrentalApp.directive('scrollFix', ['$window' ,function($window){

  var $win = angular.element($window);
    console.log("scrollfix Directive intiated");

  return {
    scope : {
        fixed : '='
    }
    , restrict: 'EA'
    , link: function($scope, element, attrs){
      var topClass = "fix-to-top";
      var offsetTop = element.prop('offsetTop');





      console.log("directive intitiated"+JSON.stringify($scope.fixed));

      $win.on('scroll',function(){
        if($window.pageYOffset >= offsetTop){
          element.addClass(topClass);
          $scope.fixed = true;






        } else{
          element.removeClass(topClass);
            $scope.fixed = false;


        }

      });

    }
  }

}])
.directive('navMenu', ['$window' ,function($window){

  var $win = angular.element($window);
  console.log("navMenu Directive intiated");

  return {
    scope: {
      items : '='
    }
    , restrict: 'EAC'
    , controllerAs : 'ctrl'
    , controller: ['$mdPanel' , function($mdPanel){

      console.log("directive controller intiated yaa");


      var self = this;

      self._mdPanel = $mdPanel;

      //EOC User Menu section
      self.userMenuItems = [
          {id:1, name:'Settings'},
          {id:2, name:'My bookings'},
          {id:3, name:'Help center'},
          {id:4, name: 'Log off'}
      ];

      function menuController(mdPanelRef){
          var _self  = this;



                  _self.click = function (item){
                      console.log('click Event' + JSON.stringify(item));

                      _self.mdPanelRef.close();

                      if(item.id === 4){
                          console.log('logout');
                          self.logout();
                      }

                  };
           self.closeUserMenu = function(){
               console.log("close call init");
              _self.mdPanelRef.close()
                      .then(function(){
                        console.log("panel closed");
                        self.panelOpened = false;
                      });

           };





      };

      var position = self._mdPanel.newPanelPosition()
  .relativeTo('.nav-link-btn')
  .addPanelPosition(self._mdPanel.xPosition.CENTER, self._mdPanel.yPosition.BELOW)
  .withOffsetY('18px');



      self.userMenuConfig = {
              attachTo: angular.element(document.getElementsByClassName("wrapper")),
              controller: menuController,
              controllerAs: 'ctrl',
              templateUrl: links.templatesBasePath + 'panel.tmpl.html',
              panelClass: 'menu-panel',
              position: position,
              locals: {
                  'selected': self.selected,
                  'userMenuItems': self.userMenuItems
              },
              //openFrom: ev,
              clickOutsideToClose: true,
              escapeToClose: true,
              focusOnOpen: false,
              zIndex: 4000
          };

      self.selected = {selectedItem: 'Settings'};

      self.showUserMenu = function (ev) {



          self.userMenuConfig.openFrom = ev;

        var panelOpen =  self._mdPanel.open(self.userMenuConfig);
        panelOpen.then(function(){
          self.panelOpened = true;
          console.log("panel opened");
        });

      };


      self.close = function(){
          console.log("temporary close call");
          if (self.panelOpened)
          {
            self.closeUserMenu();

          }
      }






      //EOC user menu section

    }]
    , templateUrl: links.templatesBasePath + 'navMenu.tpl.html'
    , link: function(scope, element, attrs , ctrl){

      $win.on('click',function(){
        console.log("window clicked yay");
        ctrl.close();
      });
      // $timeout(function(){
      //             console.log(element[0].querySelector('.md-button'));
      //            });



    // navLink.on('mouseover',function(){
    // console.log("on mouse over");
    // // var offsetLeft = element[0].offsetLeft;
    // // console.log("element offset left:"+ offsetLeft);
    //
    // });


    }
  }

}]);




// this sorta copies the contents of the config file here
//require('./app.config.js');
