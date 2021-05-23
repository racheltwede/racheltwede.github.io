"use strict";

let currentDate = new Date();
const friday = 5;

document.querySelector("#currentYear").innerHTML = currentDate.getFullYear();
let today = new Intl.DateTimeFormat("en-us", { dateStyle: "full" }).format(
    currentDate
);
document.querySelector("#todays-date").innerHTML = today;

const banner = document.querySelector(".event-banner");
if (currentDate.getDay() === friday) {
    banner.style.display = "block";
} else {
    banner.style.display = "none";
}

function menuDisplay() {
    document.getElementById("mainNav").classList.toggle("hidden");
}
