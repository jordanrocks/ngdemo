/*(function () {
	"use strict";*/

angular
	.module('customerApp')
	.factory('customerFactory', customerFactory);

customerFactory.$inject = ['$http'];

function customerFactory($http) {
	var factory = {
		getStudents: getStudents,
		students: []
	};
	return factory;



	function getStudents() {
		return $http({
			method: "GET",
			url: "students.json"
		});
	}
}

/*});*/
