// (function () {
// 	"use strict";

	angular
		.module('myCntrlApp')
		.controller('controllerOne', controllerOne);

	controllerOne.$inject = ['$scope'];

	function controllerOne($scope){
		//var vm = this;
		$scope.names=['Adam', 'Jordy', 'Vidyalankar'];
	}
/*
});*/
