var controllers = angular.module('controllers', ['pascalprecht.translate','ui.grid','ui.grid.resizeColumns']);

controllers.config(['$translateProvider', function ($translateProvider) {
	$translateProvider.preferredLanguage('en');
	$translateProvider.useStaticFilesLoader({
		prefix: './locale/locale-',
		suffix: '.json'
	});
}]);


controllers.controller("InfoController",['$http','$scope','suspectsService',function($http,$scope,suspectsService){

	$scope.selectedHeroId = 1;
	$scope.superHeros = {};
	$scope.promise = suspectsService.getSuspects();
	$scope.promise.then(function(data) {
		$scope.superHeros = data;
		suspectsService.suspects = data;
	});

	$scope.selectHero = function(selectedHeroId){
		$scope.selectedHeroId = selectedHeroId;
	}
}]);
controllers.controller("manageSuspectController",['$scope','suspectsService',function($scope,suspectsService){
	$scope.addSuspect = function(suspectObj){
		console.table(suspectsService.suspects);
		suspectsService.suspects.data.push(suspectObj);
		$('#addSuspect').modal('hide');
		$scope.suspectObj = {};
	}
}]);
controllers.controller("panelController",['$translate','$scope',function($translate,$scope){
	$scope.tab = 1;
	$scope.panelItems=[{id:1,name:"Dashboard",location:"#/dashboard"},
	{id:2,name:"List All Suspects",location:"#/list"}];
	$scope.isSelected = function(checkTab){
		return $scope.tab == checkTab;
	};
	$scope.selectTab = function(setTab)
	{
		$scope.tab = setTab;
		window.location.href = $scope.panelItems[setTab-1].location;
	};
	$scope.changeLang = function(lang)
	{
		$translate.use(lang);
	}
	
}]);

controllers.controller("ListController",['$scope','$http',function($scope,$http){

	$scope.allSuspects = {
		enableFiltering: true,
		columnDefs: [
		{ field: 'fname' },
		{ field: 'lname' },
		{ field: 'phone' },
		{ field: 'address'},
		]
	};

	$scope.$on('loading_suspects',function(){
		$scope.loading = true;  
	});
	$scope.$on('done_loading_suspects',function(){
		$scope.loading = false;  
	});

	$scope.$broadcast('loading_suspects');
	$http.jsonp("http://www.filltext.com/?callback=JSON_CALLBACK&rows=10&fname={firstName}&lname={lastName}&phone={phone}&address={streetAddress}&delay=1").
	success(function(data){
		$scope.$broadcast('done_loading_suspects');
		$scope.allSuspects.data = data;
	});
}]);