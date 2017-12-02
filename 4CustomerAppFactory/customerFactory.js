/*(function () {
	"use strict";*/

	angular
		.module('customerApp')
		.factory('customerFactory', customerFactory);

	//controllerTwo.$inject = ['$scope'];

	function customerFactory() {
		//temporary declaration
		var students = [{id: '1', name: 'Pete', city: 'NY'}, {id: '2', name: 'Jasmine', city: 'Rome'}, {id: '3', name: 'Joe', city: 'Dublin'}];
		var factory = {
			getStudents: getStudents,
			addStudents: addStudent
		};
		return factory;


		function addStudent(student) {
			students.push({id: student.id, name: student.name, city: student.name})
		}

		function getStudents() {
			return students;
		}
	}
/*});*/
