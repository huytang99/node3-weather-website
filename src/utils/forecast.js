const request = require("request");
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=02980751c7ef78c927e0513d551b66ea&query=" +
    latitude +
    "," +
    longitude +
    "&units=m";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location!", undefined);
    } else {
      const data = body.current;
      const { weather_descriptions, temperature, feelslike, humidity } = data;
      callback(
        undefined,
        weather_descriptions[0] +
          ". It is currently " +
          temperature +
          " degrees out. It feels like " +
          feelslike +
          " degrees out. The humidity is " +
          humidity + "%."
      );
    }
  });
};

module.exports = forecast;
