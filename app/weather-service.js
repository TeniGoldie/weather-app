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

      var deferred = $q.defer();

      $http({
        method: 'GET',
        url: 'https://api.darksky.net/forecast/bb9a05f6364a9cae22403236e78e3606/'+ geoLat + ',' +  geoLng,
        headers: {
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS' ,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
        }
      }).success((data) => {
          deferred.resolve(data);
          console.log('success', data);
        })
        .error((err) => {
          console.log('Error retrieving markets');
          deferred.reject(err);
        });
      return deferred.promise;

	  }

  }

})();