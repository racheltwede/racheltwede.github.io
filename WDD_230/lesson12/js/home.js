"use strict";

let today = new Date();
const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.30&lon=-111.69&units=imperial&appid=99adfa7e0c76ea8d2eb5fdc33937bd76";
fetch(weatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    if (jsObject.alerts) {
        document.querySelector("#alert").classList.remove("hidden");
        document.querySelector("#alert").classList.add("alert");
        document.querySelector(".alert-text").textContent = jsObject.alerts[0].description;
    }
    document.querySelector("#weather").textContent = jsObject.current.weather[0].main;
    document.querySelector("#temp").textContent = jsObject.current.temp.toFixed(1);
    document.querySelector("#humidity").textContent = jsObject.current.humidity + "%";

    for (let i = 1; i <= 3; i++) {
        document.querySelector("#day" + (i)).textContent = days[(today.getDay() + i) % 7];
        document.querySelector("#temp" + (i)).textContent = jsObject.daily[i - 1].temp.day.toFixed(1); 
    }
});

//make alert closeable
function closeAlert() {
    document.querySelector("#alert").classList.add("hidden");
    document.querySelector("#alert").classList.remove("alert");
}



