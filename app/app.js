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

		initMap();

	$scope.fireWeather = (geoLat, geoLng) => {geocodeAddress(geocoder, map)}

	function geocodeAddress(geocoder, resultsMap, geoLat, geoLng) {
    address = document.getElementById('address').value;
		geocoder = new google.maps.Geocoder();

    geocoder.geocode({'address': address}, (results, status) => {
    	if (status == google.maps.GeocoderStatus.OK) {
         geoLat = results[0].geometry.location.lat();
         geoLng = results[0].geometry.location.lng();

				weatherService.getWeather(geoLat, geoLng);

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
	    zoom: 13
	  });
	  infoWindow = new google.maps.InfoWindow;

	  if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition((position) => {
	      geolocate = {
	        lat: position.coords.latitude,
	        lng: position.coords.longitude
	      };
	      console.log(geolocate.lat, geolocate.lng);

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