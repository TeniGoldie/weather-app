(() => {
  'use strict';

angular
	.module('weatherApp', [])
	.controller('WeatherController', WeatherController);

	WeatherController.$inject = ['$scope'];

	function WeatherController($scope) {

		$scope.cities = [
	    {
	      name: 'Lviv',
	      temperature: '13 C',
	      overwiew: 'haze'
	    }, {
	      name: 'Paris',
	      temperature: '9 C',
	      overwiew: 'sunny'
	    }, {
	      name: 'London',
	      temperature: '8 C',
	      overwiew: 'rainy'
	    }
  	]; 
	};

})();