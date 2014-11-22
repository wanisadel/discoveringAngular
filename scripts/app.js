var app = angular.module('suicide-squad', ['pascalprecht.translate','ngRoute','ui.grid','ui.grid.resizeColumns','angular.css.injector']);
	// routing configuration
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/dashboard', {
        templateUrl: './views/partials/dashboard.html',
      }).
	  when('/', {
        templateUrl: './views/partials/dashboard.html',
      }).
    when('/list', {
        templateUrl: './views/partials/listSuspects.html',
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
app.config(['$translateProvider', function ($translateProvider) {
 $translateProvider.preferredLanguage('en');
 $translateProvider.useStaticFilesLoader({
   prefix: './locale/locale-',
   suffix: '.json'
 });
}]);