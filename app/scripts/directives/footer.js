'use strict';

app.directive('cfFooter', 
	[
	function () {
		return {
			scope:{

			},
			restrict:'EA',

			controller:function($scope){
			},
			templateUrl: '../templates/footer.html'
		};
	}]
);
