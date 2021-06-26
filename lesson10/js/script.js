"use strict";
//script that is relevant for all weather corner pages

//loads the selected google fonts
WebFont.load({
    google: {
      families: ['Lora', 'Open Sans']
    }
});

//allows hamburger menu toggle
function menuDisplay() {
    document.getElementById("mainNav").classList.toggle("hidden");
}

//displays current date in footer and current year for copyright info
let currentDate = new Date();

document.querySelector("#currentYear").innerHTML = currentDate.getFullYear();
let today = new Intl.DateTimeFormat("en-us", { dateStyle: "full" }).format(
    currentDate
);
document.querySelector("#todays-date").innerHTML = today;
