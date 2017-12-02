/*(function () {
	"use strict";*/

//angular.module('myCntrlApp', []);
angular.module('myCntrlApp', ['ngRoute']);


angular
	.module('myCntrlApp')
	.config(configFunction)
	.run(runFunction);

//configFunction.$inject = ['$routeProvider'];
function configFunction($routeProvider) {
	$routeProvider
		.when('/',
			{
				conroller: 'controllerOne',
				templateUrl: 'view1.html'
			})
		.when('/view2',
			{
				conroller: 'controllerTwo',
				templateUrl: 'view2.html'
			})
		.otherwise({redirectTo: '/'});
}

function runFunction($rootScope){
	//$rootScope.color = 'blue';
	$rootScope.filter = {};
	$rootScope.filter.name = "Varun";
}
/*
});*/
