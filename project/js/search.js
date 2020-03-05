
let searchButton = document.getElementsByClassName('search-button');
let cityPict;
let citySearchInput = document.getElementById('site-search');

console.log(searchButton);
function searchCityInfo() {
    let citySearch = citySearchInput.value;
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
        
        let className = 'is-night';
  
        if (cityUnixTime > cityUnixSunrise && cityUnixTime < cityUnixSunset) {
          className = 'is-day';
        } 
  
        function toTime(time) {
          var date = new Date(time * 1000);
          var hours = date.getHours();
          var minutes = "0" + date.getMinutes();
          var seconds = "0" + date.getSeconds();
          var formattedTime = hours + ":" + minutes.substr(-2);
          return formattedTime;
        }
        console.log(toTime(cityUnixTime));
  
        function selectIcon(code) {
          switch (code) {
            case "01d":
              return "./img/sun.png";
              break;
            case "01n":
              return "./img/moon.png";
              break;
            case "02d":
            case "02N":
            case "03d":
            case "03n":
            case "04d":
            case "04n":
              return "./img/fewclouds-01.png";
              break;
            case "09d":
            case "09n":
              return "./img/showerrain-01.png";
              break;
            case "10d":
            case "10n":
              return "./img/rain-01.png";
              break;
            case "11n":
              return "./img/thunder-01.png";
              break;
            case "13d":
            case "13n":
              return "./img/snow-01.png";
            case "50d":
            case "50n":
              return "./img/mist-01.png";
          }
          return "./img/sun.png";
        }
          
  
        let div = document.createElement("div");
  
        div.setAttribute("class", `bg-primary col-md-10 m-lg-3 m-md-3 city`);
        div.setAttribute("id", citySearch);
        div.innerHTML = `
        <span><img class="weather-icon" src=${selectIcon(
          cityWeatherIcon
        )} alt='weather-icon'></span>
        <div>
            <span class="weather-description">${cityWeatherDescription}</span>
            <span class="temperature">${cityTemp}°</span>
        </div>
        
        <div>
            <span class="city-time">${toTime(cityUnixTime + cityDifTime - 3600)}</span>
            <span class="city-name ${className}">${cityName}</span>
        </div>`;
  
        cityContainer.insertBefore(div, cityContainer.firstChild);
        pictSearch()
      });
  }

// let pictCitySearch = document.getElementById('site-search').value;

function pictSearch() {
  let citySearch = citySearchInput.value
  console.log("Aqui: " + citySearch)

fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${citySearch}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
    let cityPict = myJson.originalimage.source
  console.log(cityPict);
  
  let pictDiv = document.getElementById(citySearch);
  pictDiv.style.backgroundImage = `linear-gradient(rgba(200, 255, 0, 0), rgba(0, 0, 0, 0.8)),
  url('${cityPict}')`;
  console.log(pictDiv)
  });
}


searchButton[0].addEventListener('click', searchCityInfo);
searchButton[1].addEventListener('click', searchCityInfo);