"use strict";

//displays current date in footer and current year for copyright info
let currentDate = new Date();

document.querySelector("#currentYear").innerHTML = currentDate.getFullYear();
let today = new Intl.DateTimeFormat("en-us", { dateStyle: "full" }).format(
    currentDate
);
document.querySelector("#todays-date").innerHTML = today;

//allows hamburger menu toggle
function menuDisplay() {
    document.getElementById("mainNav").classList.toggle("hidden");
}
