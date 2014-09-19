var services = angular.module('services', []);
services.service('suspectsService', ['$http','$q',function($http,$q) {
	this.suspects = "";
	var deferred = $q.defer();
	$http.get('./stubs/heros.json').then(function(data) {
		deferred.resolve(data);
	});
	this.getSuspects = function(){
		return deferred.promise;
	};
}]);
services.service('citiesService', ['$http','$q',function($http,$q) {
	this.cities = "";
	var deferred = $q.defer();
	$http.get('./stubs/cities.json').then(function(data) {
		deferred.resolve(data);
	});
	this.getCities = function(){
		return deferred.promise;
	};
}]);