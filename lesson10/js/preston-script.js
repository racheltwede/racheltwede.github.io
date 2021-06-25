"use strict";

//calculates windschill
let tempF = parseFloat(document.querySelector("#temp").textContent);
let windSpeed = parseFloat(document.querySelector("#wind").textContent);
if (windSpeed > 3 && tempF <= 50) {
    let windChill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * tempF * Math.pow(windSpeed, 0.16));
    document.querySelector("#chill").innerHTML = Math.round(windChill) + "&#176;F";
}
else {
    document.querySelector("#chill").textContent = "n/a";
}

//adds the event banner for preston pancakes
let pancakeDate = new Date();
const friday = 5;

const banner = document.querySelector(".event-banner");
if (pancakeDate.getDay() === friday) {
    banner.style.display = "block";
} else {
    banner.style.display = "none";
}