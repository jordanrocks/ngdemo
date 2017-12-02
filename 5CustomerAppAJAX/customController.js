/*(function () {
	"use strict";*/

angular
	.module('customerApp')
	.controller('customController', customController);

customController.$inject = ['customerFactory', '$scope'];

function customController(customerFactory, $scope) {
	//vm.students = [{name: 'Pete', city: 'NY'}, {name: 'Jasmine', city: 'Rome'}, {name: 'Joe', city: 'Dublin'}];
	$scope.filter = {};
	$scope.addStudent = addStudent;
	init();

	function init() {
		customerFactory.getStudents().then(function success(response) {
			$scope.students  = customerFactory.students = response.data;
		}, function myError(response) {
			console.error("Invalid response ", response);
		});
	}

	function addStudent() {
		$scope.students.push({id: $scope.newStudent.id, name: $scope.newStudent.name, city: $scope.newStudent.name})
	}
}

// });
