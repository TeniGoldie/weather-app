(() => {
  'use strict';

angular
	.module('weatherApp', [])
	.controller('WeatherController', WeatherController);

	WeatherController.$inject = ['$scope'];

	function WeatherController($scope) {

		var map, infoWindow, geolocate;

		initMap();

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