(() => {
  'use strict';

angular
	.module('weatherApp')
	.factory('weatherService', weatherService);

	weatherService.$inject = ['$http', '$q'];

  function weatherService ($http, $q, $scope) {
  	var geoLat;
  	var geoLng;

    var currentLat;
    var currentLng;

  	return {
     	getWeather: getWeather,
      getCurrentWeather : getCurrentWeather
    };

    function getCurrentWeather(currentLat, currentLng,  successCallback) {
      $http.get('https://api.darksky.net/forecast/bb9a05f6364a9cae22403236e78e3606/'+ currentLat + ',' +  currentLng)
        .success((response) => {
          successCallback(response);
      }).error((result) => {
          alert('Error', result);
      });
    }

  	function getWeather (geoLat, geoLng, successCallback) {
      $http.get('https://api.darksky.net/forecast/bb9a05f6364a9cae22403236e78e3606/'+ geoLat + ',' +  geoLng)
       .success((response) => {
        successCallback(response);
          return response;
        }).error((result) => {
          alert('Error', result);
        });

	  }

  }

})();