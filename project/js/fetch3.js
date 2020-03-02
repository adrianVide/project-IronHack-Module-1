//This function grabs all needed data to fill in each weather snippet

// let cityData;

let cityContainer = document.getElementById('city-container');

function getCityInfo(requestedCity) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${requestedCity}&units=metric&appid=f2e9867b2d799d7ffd947e467fc52274`
  )
    .then(function(response) {
      return response.json();
    })

    .then(function(fetchedData) {
      cityData = fetchedData;
      let cityName = cityData.name;
      let cityWeatherDescription =
        cityData.weather[0].description.charAt(0).toUpperCase() +
        cityData.weather[0].description.slice(1);
      let cityWeatherIcon = cityData.weather[0].icon;
      let cityTemp = Math.round(cityData.main.temp);
      let cityUnixTime = cityData.dt;
      //   convertUnixTimestamptoTime(cityUnixTime);
      let cityUnixSunrise = cityData.sys.sunrise;
      let cityUnixSunset = cityData.sys.sunset;
    //   isDay(cityUnixTime, cityUnixSunrise, cityUnixSunset);
      console.log(cityName);
      console.log(cityWeatherDescription);
      console.log(cityWeatherIcon);
      console.log(cityTemp);
      console.log(cityUnixTime);
      console.log(cityUnixSunrise);
      console.log(cityUnixSunset);

      function isDay(time, sunrise, sunset) {
        if (time > sunrise && time < sunset) {
          return true;
        } else {
          return false;
        }
      }
      console.log(isDay(cityUnixTime, cityUnixSunrise, cityUnixSunset));

      function toTime(time) {
        var date = new Date(time * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        var formattedTime =
          hours + ":" + minutes.substr(-2);
          return formattedTime;
      }
      console.log(toTime(cityUnixTime));

      function selectIcon(code){
        switch(code){
          case '02d':
            return './img/thunder-01.png';
            break;
          case 'asdf':
            return './img/sun.png';
            break;
        }
          return './img/sun.png'
      }

      let div = document.createElement('div');
      div.setAttribute('class', "col-md-6 city")
      div.setAttribute('id', cityName)
      div.innerHTML = `
      <span><img class="weather-icon" src=${selectIcon(cityWeatherIcon)} alt='weather-icon'></span>
      <div>
          <span class="weather-description">${cityWeatherDescription}</span>
          <span class="temperature">${cityTemp}°C</span>
      </div>
      
      <div>
          <span class="city-time">${toTime(cityUnixTime)}</span>
          <span class="city-name">${cityName}</span>
      </div>`

        cityContainer.appendChild(div);
    });
}




getCityInfo("barcelona");

