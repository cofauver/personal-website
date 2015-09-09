'use strict';

app.directive('cfNavbar', 
	['$location',
	function ($location) {
		return {
			scope:{

			},
			restrict:'EA',

			controller:function($scope){
				$scope.activeTab = $location.$$path;
			},
			templateUrl: '../templates/navbar.html'
		};
	}]
);
