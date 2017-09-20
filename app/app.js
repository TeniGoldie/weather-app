(() => {
  'use strict';

angular
	.module('weatherApp', [])
	.controller('WeatherController', WeatherController);

	WeatherController.$inject = ['$scope', 'weatherService'];

	function WeatherController($scope, weatherService) {
		var map, infoWindow, geocoder, geolocate, address, marker, geoLat, geoLng;

		$scope.geoLat = null;
		$scope.geoLng = null;

		$scope.object;
		$scope.defaultObject;

		initMap();

	$scope.fireWeather = (geoLat, geoLng) => {geocodeAddress(geocoder, map)}

	function geocodeAddress(geocoder, resultsMap, geoLat, geoLng) {
    address = document.getElementById('address').value;
		geocoder = new google.maps.Geocoder();

    geocoder.geocode({'address': address}, (results, status) => {
    	if (status == google.maps.GeocoderStatus.OK) {
         geoLat = results[0].geometry.location.lat();
         geoLng = results[0].geometry.location.lng();

			weatherService.getWeather(geoLat, geoLng, function(response){
				$scope.object = response;
			});

        resultsMap.setCenter(results[0].geometry.location);
        marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        }); 
      } else {
        document.getElementById('map').innerHTML ='Geocode was not successful';
      }
    });
  };

	function initMap() {
	  map = new google.maps.Map(document.getElementById('map'), {
	    zoom: 10
	  });
	  infoWindow = new google.maps.InfoWindow;

	  if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition((position) => {
	      geolocate = {
	        lat: position.coords.latitude,
	        lng: position.coords.longitude
	      };
				var currentLat = geolocate.lat;
				var currentLng = geolocate.lng;

	      weatherService.getCurrentWeather(currentLat, currentLng, function(response){
	      	$scope.defaultObject = response;
	      });

	 			infoWindow.setPosition(geolocate);
	      infoWindow.setContent('Your location');
	      infoWindow.open(map);
	      map.setCenter(geolocate);          
	  	});        
		} else {
		    document.getElementById('map').innerHTML = 'No Geolocation Support.';
		}

		var autocomplete = new google.maps.places.Autocomplete(document.getElementById('address'), {
		  types: ['geocode']
		});
		autocomplete.bindTo('bounds', map);

	};	

};

})();