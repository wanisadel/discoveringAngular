var app = angular.module('shop', ['ngRoute','controllers','directives','services','pascalprecht.translate']);
	// routing configuration
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/dashboard', {
        templateUrl: './views/partials/dashboard.html',
        controller: 'InfoController'
      }).
	  when('/', {
        templateUrl: './views/partials/dashboard.html',
        controller: 'InfoController'
      }).
    when('/list', {
        templateUrl: './views/partials/listSuspects.html',
        controller: 'ListController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

app.controller('HeaderController',['$scope','$locale',function($scope,$locale){
	if($locale.id == 'en-us'){
		$scope.filename= './styles/bootstrap.min.css';
  }
}]);