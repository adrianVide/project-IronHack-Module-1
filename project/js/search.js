
let searchButton = document.getElementsByClassName('search-button');

console.log(searchButton);
function searchCityInfo() {
    let citySearch = document.getElementById('site-search').value;

    console.log(citySearch)
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=metric&appid=f2e9867b2d799d7ffd947e467fc52274`
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
        let cityUnixSunrise = cityData.sys.sunrise;
        let cityUnixSunset = cityData.sys.sunset;
        let cityId = cityName.split(' ').join('-');
        let cityDifTime = cityData.timezone;
        console.log(cityName);
        console.log(cityWeatherDescription);
        console.log(cityWeatherIcon);
        console.log(cityTemp);
        console.log(cityUnixTime);
        console.log(cityUnixSunrise);
        console.log(cityUnixSunset);

      }
      )
}
searchButton[0].addEventListener('click', searchCityInfo);
searchButton[1].addEventListener('click', searchCityInfo);