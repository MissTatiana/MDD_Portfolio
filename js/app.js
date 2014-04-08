var myApp = angular.module('myApp', [
	'ngRoute',
	'galleryControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/sites', {
		templateUrl: 'partials/sites.html',
		controller: 'ListController'
	}).
	otherwise({
		redirectTo: '/sites'
	});
}]);