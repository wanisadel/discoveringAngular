app.controller("InfoController",['$http','$scope','suspectsService',function($http,$scope,suspectsService){

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
app.controller("manageSuspectController",['$scope','suspectsService','citiesService',function($scope,suspectsService,citiesService){
	
	$scope.suspectObj = {};
	$scope.cities  = {};
	$scope.promise = citiesService.getCities();
	$scope.promise.then(function(data){
		$scope.cities = data.data;
	});
	$scope.showValidation = false;
	$scope.triggerValidation = function(){
		$scope.showValidation = true;
	};
	$scope.addSuspect = function(suspectObj){
		console.table(suspectsService.suspects);
		suspectObj.mugshot = "img/catwoman.jpg";
		suspectObj.id = 5;
		suspectsService.suspects.data.push(suspectObj);
		$('#addSuspect').modal('hide');
		$scope.suspectObj = {};
		$scope.suspectForm.$setPristine();
		$scope.showValidation = false;
	}
}]);
app.controller("panelController",['$translate','$scope','$locale','cssInjector',function($translate,$scope,$locale,cssInjector){
	$scope.changeLang = function(lang)
	{
		if(lang=='ar')
		{
			 cssInjector.add("./styles/bootstrap-rtl.min.css");
		}
		else
		{
			cssInjector.removeAll();
		}
		$locale.id  = lang;
		$translate.use(lang);
	}
}]);

app.controller("ListController",['$scope','$http',function($scope,$http){

	$scope.allSuspects = {
		enableFiltering: true,
		columnDefs: [
		{ field: 'fname' },
		{ field: 'lname' },
		{ field: 'phone' },
		{ field: 'address'}
		]
	};

	$scope.$on('loading_suspects',function(){
		$scope.loading = true;  
	});
	$scope.$on('done_loading_suspects',function(){
		$scope.loading = false;  
	});

	$scope.$broadcast('loading_suspects');
	$http.jsonp("http://www.filltext.com/?callback=JSON_CALLBACK&rows=10&fname={firstName}&lname={lastName}&phone={phone}&address={streetAddress}").
	success(function(data){
		$scope.$broadcast('done_loading_suspects');
		$scope.allSuspects.data = data;
	});
}]);