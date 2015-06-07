angular.module('emailReminder.home', [])
.config(function($stateProvider, $urlRouterProvider) {
  // Now set up the states
  $stateProvider
  .state('home', {
    url: "/home",
    templateUrl: "home/home.html"
  });
});


