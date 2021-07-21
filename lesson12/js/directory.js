"use strict";

const requestURL = "https://raw.githubusercontent.com/RachelTwede/racheltwede.github.io/master/lesson12/json/companies.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject); //FIXME: remove this
    const companies = jsonObject["companies"];
    for (let i = 0; i < companies.length; i++ ) {
        let card = document.createElement("section"); //container for all
        let h2 = document.createElement("h2");
        let logo = document.createElement("img"); //add href and alt attributes
        let contactInfo = document.createElement("div") //container for following elements
        let phone = document.createElement("p");
        let phoneSpan = document.createElement("span"); //add class of "material-icons"
        let address = document.createElement("p");
        let addressSpan = document.createElement("span"); //add class of "material-icons"
        let website = document.createElement("p");
        let websiteSpan = document.createElement("span"); //add class of "material-icons"
        let websiteLink = document.createElement("a");

        h2.textContent = companies[i].name;
        console.log(companies[i].logo);
        logo.setAttribute("src", companies[i].logo);
        logo.setAttribute("alt", companies[i].name + " " + logo);

        phoneSpan.textContent = "phone";
        addressSpan.textContent = "location_on";
        websiteSpan.textContent = "web";
        phoneSpan.classList.add("material-icons");
        addressSpan.classList.add("material-icons");
        websiteSpan.classList.add("material-icons");

        websiteLink.textContent = companies[i].website;
        websiteLink.setAttribute("href", companies[i].sitelink);

        phone.appendChild(phoneSpan);
        address.appendChild(addressSpan);
        website.appendChild(websiteSpan);
        website.appendChild(websiteLink);

        phone.innerHTML = phone.innerHTML + companies[i].phone;
        address.innerHTML = address.innerHTML + companies[i].address;

        card.appendChild(h2);
        card.appendChild(logo);
        card.appendChild(contactInfo);
        contactInfo.appendChild(phone);
        contactInfo.appendChild(address);
        contactInfo.appendChild(website);

        document.querySelector("div.directory").appendChild(card);
    }
  });

