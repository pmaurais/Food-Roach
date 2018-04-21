angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.search', {
    url: '/Search',
    views: {
      'tab1': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('tabsController.favorites', {
    url: '/Favorites',
    views: {
      'tab2': {
        templateUrl: 'templates/favorites.html',
        controller: 'favoritesCtrl'
      }
    }
  })

  .state('tabsController.createEvent', {
    url: '/CreateEvent',
    views: {
      'tab3': {
        templateUrl: 'templates/createEvent.html',
        controller: 'createEventCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.unk', {
    url: '/unk',
    views: {
      'tab4': {
        templateUrl: 'templates/unk.html',
        controller: 'unkCtrl'
      }
    }
  })

  .state('tabsController.user', {
    url: '/User',
    views: {
      'tab5': {
        templateUrl: 'templates/user.html',
        controller: 'userCtrl'
      }
    }
  })

  .state('page', {
    url: '/page12',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

$urlRouterProvider.otherwise('/page1/Search')


});