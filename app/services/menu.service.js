'use strict';


angular.module('menuS', [])
    .factory('menuService', function ($rootScope) {

    var self = this;

    self.menuItems = [
         {id: 1,
          menu: [
          {title: "Living room",  //main group
           id:1
           , list: [
             {title: "TABLES",  //category
              id:1,
              products: [ //products in category
                {name:"Dining", id:1}, {name:"study", id:2}, {name:"drawing", id:3}
              ],
              imgUrl:null},
              {title: "SOFAS",  //category
               id:2,
               products: [
                {name:"Sectional", id:1}, {name:"Couches", id:2}, {name:"Corner", id:3}
              ],
              imgUrl:"47"}
              ,     {title: "SOFAS",  //category
                   id:2,
                   products: [
                    {name:"Sectional", id:1}, {name:"Couches", id:2}, {name:"Corner", id:3}
                  ],
                  imgUrl:"47"}
           ]
          , imgUrl:'4'
          },
          {title: "Kitchen",
            id:2
          , list: [
             {title: "CHIMNEYS",
              id:3,
              products: [
                {name:"Faber", id:1}, {name:"sunflame", id:2}, {name:"Kaff", id:3}
              ],
              imgUrl:"42"}
           ]
          , imgUrl:'6'
          },
          {title: "Bathroom",
          id:3
          , list: [
             {title: "DOORS",
              id:4,
              products: [
                {name:"Fibre", id:1}, {name:"Platic", id:2}, {name:"Rubberised", id:3}
              ],
              imgUrl:"45"}
           ]
            , imgUrl:'5'
          }
        ]
         },
         {id:2,
          menu: [
          {title: "Hindware",  //main group
           id:1
           , list: [
             {title: "SHOWERS",  //category
              id:1,
              products: [ //products in category
                {name:"Grand", id:1}, {name:"Multi function", id:2}, {name:"Slim rain", id:3}
              ],
              imgUrl:null},
              {title: "BASINS",  //category
               id:2,
               products: [
                {name:"Cloakroom", id:1}, {name:"corner", id:2}, {name:"vanity", id:3}
              ],
              imgUrl:"47"}
              ,     {title: "TOILETS",  //category
                   id:2,
                   products: [
                    {name:"Denver close", id:1}, {name:"Euro", id:2}, {name:"Savoy", id:3}
                  ],
                  imgUrl:"47"}
           ]
          , imgUrl:'2'
          },
          {title: "Jaqur",
            id:2
          , list: [
             {title: "TAPS",
              id:3,
              products: [
                {name:"Edge bath", id:1}, {name:"Blade basin", id:2}, {name:"Flow deck", id:3}
              ],
              imgUrl:"42"}
           ]
          , imgUrl:'3'
          },
          {title: "Bayern",
          id:3
          , list: [
             {title: "VANITY UNITS",
              id:4,
              products: [
                {name:"Alpine", id:1}, {name:"Mino", id:2}, {name:"New polo", id:3}
              ],
              imgUrl:"45"}
           ]
            , imgUrl:'1'
          }
        ]
        }
       ];

    self.menuId = 0;

    return {
        setMenuItemId: function (menuId) {
          //TODO check if menu id exists and notify
          self.menuId = menuId;
          $rootScope.$emit('change-event');
        },
        getCurrentMenuItem: function(){

           if(self.menuId == 0){
             return self.menuItems[0].menu;
           }

            for (var i = 0; i < self.menuItems.length; i++) {
                //console.log('loop ');
                if (self.menuId == self.menuItems[i].id) {
                 // console.log('get item with id' + self.menuId);
                    return self.menuItems[i].menu;
                }
            }
        },
        subscribe: function (scope, callback) {
            var handler = $rootScope.$on('change-event', callback);
            scope.$on('$destroy', handler);
        },
        notify: function (itemId) {
            $rootScope.$emit('change-event');
        }
    };
});
