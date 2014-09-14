var directives = angular.module('directives', []);
	directives.directive('topBar',function(){
	
		return {
			restrict: 'E',
			templateUrl: './views/directives/top-bar.html',
		};
	});