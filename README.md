# Simple Weather App
<hr>

This is a simple weather app, which upon load, asks user for permission to load GeoLocation and displays weather relating to user's location.

Should the user deny access to auto-detect location, the user is presented with the option to manually search for any location around the world to see weather report.

#Run Locally
<hr>
1. Install the app from git 

$ git clone https://github.com/TeniGoldie/weather-app
$ cd weather-app
$ npm install

2. Add this extension to the browser:
https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en

(Dark Sky as a security precaution has disabled cross-origin resource sharing (CORS) on their servers to help keep API secret key a secret. This extension is necessary to run the app from localhost to get data from Dark Sky server).

3. Enable cross-origin resourse sharing.

4. Run the app :  
$ npm start.
