let tempF = document.querySelector("#temp").innerHTML;
let windSpeed = document.querySelector("#wind").innerHTML;
if (tempF > 50) {
    document.querySelector("#chill").innerHTML = "n/a";
}
else {
    if (windSpeed < 3) {
        document.querySelector("#chill").innerHTML = "n/a";
    }
    else {
        let windChill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * tempF * Math.pow(windSpeed, 0.16));
        document.querySelector("#chill").innerHTML = Math.round(windChill) + "&#176;F";
    }
}