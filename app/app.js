(() => {
  'use strict';

angular
	.module('weatherApp', [])
	.controller('WeatherController', WeatherController);

	WeatherController.$inject = ['$scope'];

	function WeatherController($scope) {

		var map, infoWindow, geocoder, geolocate, address, marker, geoLat, geoLng;

		initMap();

		function geocodeAddress(geocoder, resultsMap, geoLat, geoLng) {
    address = document.getElementById('address').value;
		geocoder = new google.maps.Geocoder();

    geocoder.geocode({'address': address}, (results, status) => {
    	if (status == google.maps.GeocoderStatus.OK) {
        geoLat = results[0].geometry.location.lat();
        geoLng = results[0].geometry.location.lng();

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

  	document.getElementById('submit').addEventListener('click', function() {
      geocodeAddress(geocoder, map);
    });

		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    zoom: 9
		  });
		  infoWindow = new google.maps.InfoWindow;

		  if (navigator.geolocation) {
		    navigator.geolocation.getCurrentPosition(function(position) {
		      geolocate = {
		        lat: position.coords.latitude,
		        lng: position.coords.longitude
		      };

		 			infoWindow.setPosition(geolocate);
		      infoWindow.setContent('Your location');
		      infoWindow.open(map);
		      map.setCenter(geolocate);          
		  	});        
			} else {
			    document.getElementById('map').innerHTML = 'No Geolocation Support.';
			}
		};	

	};

})();