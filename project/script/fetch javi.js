//This function grabs all needed data to fill in each weather snippet
let cityData= {};
let div2 = document.querySelector("div")
console.log(div2)
async function getCityInfo(requestedCity) {
    let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${requestedCity}&units=metric&appid=f2e9867b2d799d7ffd947e467fc52274`);
    let data = await response.json()
    return data
}
// getCityInfo("barcelona");
async function algo() {
    cityData = await getCityInfo("barcelona");
    console.log(cityData.name)
    let div = document.createElement("div");
    div.innerHTML = cityData.name;
    div2.appendChild(div)
    
}
algo();