angular.module('emailReminder.home')
.controller('homeCtrl', function($scope, userModel){
  $scope.foo = 'foofffff';
  
  
  $scope.user = userModel.currentUser;
  
  
  
});
