/*(function () {
	"use strict";*/

angular
	.module('customerApp')
	.controller('customController', customController);

customController.$inject = ['customerFactory', '$scope'];

function customController(customerFactory, $scope) {
	//vm.students = [{name: 'Pete', city: 'NY'}, {name: 'Jasmine', city: 'Rome'}, {name: 'Joe', city: 'Dublin'}];
	$scope.filter = {};
	$scope.addStudent = customerFactory.addStudents;
	init();

	function init() {
		$scope.students = customerFactory.getStudents();
	}

	function addStudent() {
		$scope.students.push({name: $scope.newStudent.name, city: $scope.newStudent.city});
	}
}

// });
