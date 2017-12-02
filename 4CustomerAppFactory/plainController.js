/*(function () {
	"use strict";*/

angular
	.module('customerApp')
	.controller('plainController', plainController);

plainController.$inject = ['$scope'];

function plainController($scope) {
	//var vm = this;
	$scope.names = ['Adam', 'Jordy', 'Vidyalankar'];
}

/*});*/
