'use strict';

var isDev = true;

var serverBasePath =  'http://partytribe.net/vrent/api/public/';
var devBasePath = 'http://localhost/angularpower/public/';

var devImageBasePath = 'http://localhost/vrent/website/public/';
var serverImageBasePath = 'http://partytribe.net/vrent/website/public/';

var apiBasePath = devBasePath;

if (!isDev) {
    // if not dev then its the server
    apiBasePath = serverBasePath;
}

var imageBasePath = devImageBasePath;

if (!isDev) {
    // if its not the dev then its the server
    imageBasePath = serverImageBasePath;
}

var links = {
     templatesBasePath: 'templates/'
    ,auth: {
         requestToken: apiBasePath + 'auth/requestToken'
       , refreshToken: apiBasePath + 'auth/refreshToken'
       , authenticateToken: apiBasePath + 'auth/authenticateToken'
       , logout: apiBasePath + 'auth/invalidateToken'
       , passwordRestRequest: apiBasePath + 'auth/passwordRestRequest'
       , resetPassword: apiBasePath + 'auth/resetPassword'
       , updatePassword: apiBasePath + 'auth/changePass'
     },
     bookings: {
           bookings: apiBasePath + 'bookings/bookings/:id'
         , book: apiBasePath + 'bookings/book'
     },
     vehicle: {
           vehicle: apiBasePath + 'api/vehicles/vehicle/:id'
         , formData: apiBasePath + 'api/vehicles/formData'
         , imageUploadURL: apiBasePath + 'api/vehicles/uploadImage'
         , imageBasePath : imageBasePath + 'assets/vehicles/'
     },
     vendor: {
           vendor: apiBasePath + 'api/vendors/vendor/:id'
         , formData: apiBasePath + 'api/vendors/formData'
     }

};

module.exports = links;
