"use strict";

function closeAlert() {
    
}

function toggleMenu() {
    document.querySelector("#nav-menu").classList.toggle("hidden");
}

function toggleSocial() {
    document.querySelector("#social").classList.toggle("hidden");
}

//updates copyright year
let now = new Date();
document.querySelector(".copyright-year").innerHTML = now.getFullYear();

//last modified date
let modified = new Date(document.lastModified);
const options = {year: 'numeric', month: 'short', day: 'numeric'}
let intlModified = new Intl.DateTimeFormat("en-us", options).format(
    modified
);
document.querySelector(".modified").innerHTML = intlModified;