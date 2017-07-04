
var links = require('../../common/links.js');

var footerModule = angular.module('footerM', [])
  .component('footer', {
    templateUrl: 'footer.html',
    controller: ['$location', '$mdPanel', function ($location, $mdPanel) {
      console.log('footer component init');

      var self = this;



      self.go = function (path) {
        console.log('path ' + path);
        $location.path(path);
      }

      //BOC enquiry panel
      self._mdPanel = $mdPanel;

      self.mdPanelRef = self._mdPanel.create('enquiry', {
        id: 'enquiry'
      });

      self.enquiry = function ($event) {
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
    //EOC enquiry panel

    }]
  });


module.exports = footerModule;
