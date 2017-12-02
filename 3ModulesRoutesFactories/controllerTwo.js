/*(function () {
	"use strict";*/

	angular
		.module('myCntrlApp')
		.controller('controllerTwo', controllerTwo);

	controllerTwo.$inject = ['$scope'];

	function controllerTwo($scope) {
		//var vm = this;
		$scope.students = [{name: 'Pete', city: 'NY'}, {name: 'Jasmine', city: 'Rome'}, {name: 'Joe', city: 'Dublin'}];
		/*$scope.filter = {};
		$scope.filter.name = "Varun";*/
		$scope.addStudent = addStudent;

		function addStudent() {
			$scope.students.push({name: $scope.newStudent.name, city: $scope.newStudent.city});
		}
	}
/*
});*/
