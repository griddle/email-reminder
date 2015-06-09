angular.module('emailReminder.models')
.factory('userModel', function($resource, apiPath){
  
  var _userModel = $resource(apiPath + 'users/:id', {id: '@id'}, {
    'me': {
      method: 'GET',
      url: '/api/v1/users/me',
    }
  });
  
  
  
  var _currentUser;
  Object.defineProperty(_userModel, "currentUser", {
    get: function () {
      if (!_currentUser) _currentUser = _userModel.me();
      return _currentUser;
    }
  });
  
  
  
  
  return _userModel;
  
});
