/*(function () {
	"use strict";*/

//angular.module('myCntrlApp', []);
	angular.module('customerApp', ['ngRoute']);


	angular
		.module('customerApp')
		.config(configFunction);

	function configFunction($routeProvider) {
		$routeProvider
			.when('/',
				{
					conroller: 'plainController',
					templateUrl: 'plainview.html'
				})
			.when('/customview',
				{
					conroller: 'customController',
					templateUrl: 'customview.html'
				})
			.otherwise({redirectTo: '/'});


	}

/*});*/
