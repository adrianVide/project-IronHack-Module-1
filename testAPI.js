fetch("https://api.openweathermap.org/data/2.5/weather?q=london&appid=f2e9867b2d799d7ffd947e467fc52274")

    .then(response => response.json())
    .then(data => {
    consola.log(data);
})

fetch('http://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=f2e9867b2d799d7ffd947e467fc52274')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });

//DARKSKY
  Promise { <pending> }
  {
    latitude: 41.385063,
    longitude: 2.1734043,
    timezone: 'Europe/Madrid',
    currently: {
      time: 1582883603,
      summary: 'Clear',
      icon: 'clear-day',
      precipIntensity: 0,
      precipProbability: 0,
      temperature: 58.89,
      apparentTemperature: 58.89,
      dewPoint: 47.38,
      humidity: 0.66,
      pressure: 1022.3,
      windSpeed: 6.84,
      windGust: 12.14,
      windBearing: 249,
      cloudCover: 0.03,
      uvIndex: 3,
      visibility: 10,
      ozone: 299.2
    },
    hourly: {
      summary: 'Partly cloudy throughout the day.',
      icon: 'partly-cloudy-day',
      data: [
        [Object], [Object], [Object], [Object],
        [Object], [Object], [Object], [Object],
        [Object], [Object], [Object], [Object],
        [Object], [Object], [Object], [Object],
        [Object], [Object], [Object], [Object],
        [Object], [Object], [Object], [Object],
        [Object], [Object], [Object], [Object],
        [Object], [Object], [Object], [Object],
        [Object], [Object], [Object], [Object],
        [Object], [Object], [Object], [Object],
        [Object], [Object], [Object], [Object],
        [Object], [Object], [Object], [Object],
        [Object]
      ]
    },
    daily: {
      summary: 'Light rain on Monday.',
      icon: 'rain',
      data: [
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object]
      ]
    },
    flags: {
      sources: [ 'meteoalarm', 'cmc', 'gfs', 'icon', 'isd', 'madis' ],
      'meteoalarm-license': 'Based on data from EUMETNET - MeteoAlarm ' +
        '[https://www.meteoalarm.eu/]. Time delays between this ' +
        'website and the MeteoAlarm website are possible; for the most ' +
        'up to date information about alert levels as published by the ' +
        'participating National Meteorological Services please use the ' +
        'MeteoAlarm website.',
      'nearest-station': 1.149,
      units: 'us'
    },
    offset: 1
  }


//OPENWEATHER

Promise { <pending> }
{
  coord: { lon: -0.13, lat: 51.51 },
  weather: [ { id: 500, main: 'Rain', description: 'light rain', icon: '10d' } ],
  base: 'stations',
  main: {
    temp: 4.95,
    feels_like: 0.05,
    temp_min: 3.33,
    temp_max: 6.11,
    pressure: 1010,
    humidity: 81
  },
  visibility: 10000,
  wind: { speed: 4.6, deg: 160 },
  rain: { '1h': 0.51 },
  clouds: { all: 75 },
  dt: 1582883548,
  sys: {
    type: 1,
    id: 1414,
    country: 'GB',
    sunrise: 1582872569,
    sunset: 1582911434
  },
  timezone: 0,
  id: 2643743,
  name: 'London',
  cod: 200
}
