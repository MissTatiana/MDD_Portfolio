var galleryControllers = angular.module('galleryControllers', []);

galleryControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
	//Get websites
	$http.get('js/data.json').success(function(data) {
		$scope.websites = data;
	});
}]);

galleryControllers.controller('GraphicsController', ['$scope', '$http', function($scope, $http) {
	$http.get('js/graphics.json').success(function(datag) {
		$scope.graphics = datag;
	})
}]);

galleryControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$http.get('js/data.json').success(function(data) {
		$scope.websites = data;
		$scope.whichItem = $routeParams.itemId;

		if($routeParams.itemId > 0) {
			$scope.prevItem = Number($routeParams.itemId)-1;
		}
		else {
			$scope.prevItem = $scope.websites.length-1;
		}

		if($routeParams.itemId < $scope.websites.length-1) {
			$scope.nextItem = Number($routeParams.itemId)+1;
		}
		else {
			$scope.nextItem = 0;
		}
	});
}]);

