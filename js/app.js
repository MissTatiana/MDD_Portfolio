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
	when('/graphics', {
		templateUrl: 'partials/graphics.html',
		controller: 'GraphicsController'
	}).
	when('/about', {
		templateUrl: 'partials/about.html'
	}).
	when('/details/:itemId', {
		templateUrl: 'partials/details.html',
		controller: 'DetailsController'
	}).
	otherwise({
		redirectTo: '/sites'
	});
}]);