
var links = require('../../common/links.js');

var headerModule = angular.module('headerM', [])
  .component('header', {
    templateUrl: links.templatesBasePath + 'header.html',

    controller: ['$mdPanel', '$location', function ($mdPanel, $location) {
      console.log('header component init');

      var self = this;

      self.fixedNav = false;
      self.scrollEnter = false;

      self._mdPanel = $mdPanel;

      self.mdPanelRef = self._mdPanel.create('enquiry', {
        id: 'enquiry'
      });

     self.enquiry = function($event){
        console.log('open enquiry form');

        //TODO center the panel
         var pos = self._mdPanel.newPanelPosition()
                          .absolute()
                          .center();

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
              self.mdPanelRef.open();

          });

        } else {

          console.log('show panel directly');
          self.mdPanelRef.updateAnimation(panelAnimation);
          self.mdPanelRef.updatePosition(pos);
          self.mdPanelRef.open();

        }

      }

      self.home = function(){
        console.log('redirect home click');
        $location.path('/home');
      }


      self.navItems = [
        { name: "Product", hasCollps: true, active: false, id: 1 }
        , { name: "Featured Brands", hasCollps: true, active: true, id: 2 }
        , { name: "Store Location", hasCollps: false, active: false, id: 3 }
        , { name: "Contact Us", hasCollps: false, active: false, id: 4 }
        , { name: "About Us", hasCollps: false, active: false, id: 5 }
      ];

    }]
  });

module.exports = headerModule;
