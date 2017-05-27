
var links = require('../common/links.js');
var homeModule  = angular.module('homeM', [])
      .component('home', {
        templateUrl: links.templatesBasePath + 'home.html'
        ,controller: ['$mdPanel',
          function homeController ($mdPanel) {
            console.log("hello i am home controller");

            var self = this;

      //       self._mdPanel = $mdPanel;
      //       //EOC User Menu section
      //       self.userMenuItems = [
      //           {id:1, name:'Settings'},
      //           {id:2, name:'My bookings'},
      //           {id:3, name:'Help center'},
      //           {id:4, name: 'Log off'}
      //       ];
      //
      //       function menuController(mdPanelRef){
      //           var _self  = this;
      //
      //
      //
      //                   _self.click = function (item){
      //                       console.log('click Event' + JSON.stringify(item));
      //
      //                       _self.mdPanelRef.close();
      //
      //                   };
      //
      //            self.closeUserMenu = function(){
      //                _self.mdPanelRef.close();
      //            };
      //       };
      //
      //       var position = self._mdPanel.newPanelPosition()
      // .relativeTo('.signupbtn')
      // .addPanelPosition(self._mdPanel.xPosition.CENTER, self._mdPanel.yPosition.BELOW)
      // .withOffsetX('-10px');
      //
      //       var userMenuTemplate =  '<div class="demo-menu-example1"  ' +
      //                               '     aria-label="user menu" ' +
      //                               '     role="listbox">' +
      //                               '  <div class="demo-menu-item" ' +
      //                               '       tabindex="-1" ' +
      //                               '       role="option" ' +
      //                               '       ng-repeat="item in ctrl.userMenuItems track by item.id" ' +
      //                               '       ng-click="ctrl.click(item)"' +
      //                               '       ">' +
      //                               '    {{ item.name }} ' +
      //                               '  </div>' +
      //                               '</div>';
      //
      //       self.userMenuConfig = {
      //               attachTo: angular.element(document.body),
      //               controller: menuController,
      //               controllerAs: 'ctrl',
      //               template: userMenuTemplate,
      //               panelClass: 'demo-menu-example1',
      //               position: position,
      //               locals: {
      //                   'selected': self.selected,
      //                   'userMenuItems': self.userMenuItems
      //               },
      //               //openFrom: ev,
      //               clickOutsideToClose: true,
      //               escapeToClose: true,
      //               focusOnOpen: false,
      //               zIndex: 4000
      //           };
      //
      //       self.selected = {selectedItem: 'Settings'};
      //
      //       self.showUserMenu = function (ev) {
      //
      //           console.log('show panel ');
      //
      //           self.userMenuConfig.openFrom = ev;
      //
      //           self._mdPanel.open(self.userMenuConfig);
      //       };
      //

            //EOC user menu section



          }]


      });

  module.exports = homeModule;
