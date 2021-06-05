'use strict';

let lastVisit = localStorage.getItem('lastVisitStored');
let todaysDate = new Date();
const msPerDay = 86400000;

if (lastVisit) { 
    lastVisit = new Date(lastVisit);
    document.querySelector('#gallery-visit-span').innerHTML = Math.round((todaysDate - lastVisit) / msPerDay);
}
else {
    document.querySelector('#gallery-visit-p').innerHTML = 'This is your first time visiting this page.';
}

localStorage.setItem('lastVisitStored', todaysDate);