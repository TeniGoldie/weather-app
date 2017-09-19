(() => {
  'use strict';

angular
	.module('weatherApp')
	.factory('weatherService', weatherService);

	weatherService.$inject = ['$http', '$q'];

  function weatherService ($http, $q) {
  	var geoLat;
  	var geoLng;

  	return {
     	getWeather: getWeather
    };

  	function getWeather (geoLat, geoLng) {
  		console.log('geoLat =>', geoLat);
  		console.log('geoLng =>', geoLng);
	  }

  }


})();