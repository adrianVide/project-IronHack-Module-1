
//This function grabs all needed data to fill in each weather snippet


function getCityInfo(requestedCity) {
console.log('hola');
    fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${requestedCity}&units=metric&appid=f2e9867b2d799d7ffd947e467fc52274`
  )
    .then(function(response) {
        console.log('hola2')
      return response.json();
    })
    .then(function(cityData) {
      let cityName = cityData.name;
      console.log('1 = ' + cityName)
      let cityWeatherDescription =
        cityData.weather[0].description.charAt(0).toUpperCase() +
        cityData.weather[0].description.slice(1);
      let cityWeatherIcon = cityData.weather[0].icon;
      let cityTemp = Math.round(cityData.main.temp);
      let cityUnixTime = cityData.dt;
    //   convertUnixTimestamptoTime(cityUnixTime);
      let cityUnixSunrise = cityData.sys.sunrise;
      let cityUnixSunset = cityData.sys.sunset;
    //   console.log(cityName);
    //   console.log(cityWeatherDescription);
    //   console.log(cityWeatherIcon);
    //   console.log(cityTemp);
    //   console.log(cityUnixTime);
    //   console.log(cityUnixSunrise);
    //   console.log(cityUnixSunset);
    //   console.log(cityData);
    console.log(cityName);
    return cityName;
    });
}

// getCityInfo("barcelona");

function
// async function algo() {
//     let ciudad = await getCityInfo("barcelona");
//     console.log('2 = ' + ciudad);
// }

// algo();

// console.log(cityName);

// function isDay() {
//     if (cityUnixTime > cityUnixSunrise && cityUnixTime < cityUnixSunset) {
//         return true;
//     } else {
//         return false;
//     }
// }

// isDay();







// To Use in the City time field (BackLog)

// function convertUnixTimestamptoTime(uTime) {


//   dateObj = new Date((uTime+80) * 1000);

//   utcString = dateObj.toUTCString();

//   time = utcString.slice(-11, -4);

//   console.log('uTime= ' + uTime);
//   console.log('time= ' + time);
//   console.log('dateObj= ' + dateObj);
//   console.log('utcString= ' + utcString)
// }

