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