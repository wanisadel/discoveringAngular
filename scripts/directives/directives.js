app.directive('topBar',function(){
	return {
		restrict: 'E',
		replace: true,//remove the top-bar tag from the dom and replaces the content
		templateUrl: './views/directives/top-bar.html',
		
		link: function($scope,$element,$attrs){
			
							//debugger;
			//post compiling event. when dom is loaded
			//element is the root node for the directive
			//you can call a service here
		}
	};
});