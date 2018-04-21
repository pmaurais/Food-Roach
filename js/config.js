// This code would go in the JS file you create in Creator

angular.module('app.config', [])
// remember to add "app.config" to your angular modules in Code Settings

.config(function($ionicConfigProvider) {
    
  $ionicConfigProvider.tabs.position('bottom'); // other values: top
  
});