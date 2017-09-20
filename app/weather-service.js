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

      $http.get('https://api.darksky.net/forecast/bb9a05f6364a9cae22403236e78e3606/'+ geoLat + ',' +  geoLng)
      .then((response) => {
        console.log("success ", response.data.currently);
      },(result) => {
        console.log("Error " , result);
      });
      return getWeather;
	  }


  }

})();