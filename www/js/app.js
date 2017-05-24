
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })
    .state('tab.home', {
        url: '/home',
        views: {
            'search-home': {
                templateUrl: 'templates/search-home.html',
                controller: 'SearchController'
            }
        }
    })
    .state('tab.profile', {
        url:'/profile/profile-results/:username',
        views: {
            'search-home': {
                templateUrl:'templates/profile-results.html',
                controller: 'ProfileController'
            }
        }
    });

  $urlRouterProvider.otherwise('/tab/home');

});
