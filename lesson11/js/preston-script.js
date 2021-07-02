"use strict";

//gets weather info
const townID = 5604473;
const weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=99adfa7e0c76ea8d2eb5fdc33937bd76";
fetch(weatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.querySelector("#curr-weather").textContent = jsObject.weather[0].description;
    document.querySelector("#temp").textContent = jsObject.main.temp.toFixed(1);
    document.querySelector("#humidity").textContent = jsObject.main.humidity + "%";
    document.querySelector("#wind").textContent = jsObject.wind.speed.toFixed(1) + " mph";
});

//calculates windschill
let tempF = parseFloat(document.querySelector("#temp").textContent);
let windSpeed = parseFloat(document.querySelector("#wind").textContent);
if (windSpeed > 3 && tempF <= 50) {
    let windChill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * tempF * Math.pow(windSpeed, 0.16));
    document.querySelector("#chill").innerHTML = windChill.toFixed(1) + "&#176;F";
}
else {
    document.querySelector("#chill").textContent = "n/a";
}

//gets forecast
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=99adfa7e0c76ea8d2eb5fdc33937bd76";
fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const filteredForecast = jsObject.list.filter(forecast => forecast.dt_txt.includes("18:00:00"));
    const imagesrc = "https://openweathermap.org/img/w/";
    for (let i = 0; i < 5; i++) {
        document.querySelector("#icon" + (i + 1)).setAttribute("src", imagesrc + filteredForecast[i].weather[0].icon + ".png");
        document.querySelector("#icon" + (i + 1)).setAttribute("alt", filteredForecast[i].weather[0].description);
        document.querySelector("#temp" + (i + 1)).textContent = filteredForecast[i].main.temp.toFixed(1);
    }    
});

//updates the days row in the forecast table
let now = new Date();
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
for (let i = 0; i < 5; i++) {
    document.querySelector("#day" + (i+1)).innerHTML = days[(now.getDay() + i) % 7];
}

//adds the event banner for preston pancakes
const friday = 5;
const banner = document.querySelector(".event-banner");
if (now.getDay() === friday) {
    banner.style.display = "block";
} else {
    banner.style.display = "none";
}

//add event section
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject["towns"];
        const prestonInfo = towns.filter(town => town.name == "Preston");

        console.log(prestonInfo);
        for (let i = 0; i < prestonInfo[0].events.length; i++) {
            let event = document.createElement('p');
            event.textContent = prestonInfo[0].events[i];
            document.querySelector(".events-section").appendChild(event);
        }
    });