angular.module('emailReminder.home', [])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: "/home",
    templateUrl: "home/home.html"
  });
});


