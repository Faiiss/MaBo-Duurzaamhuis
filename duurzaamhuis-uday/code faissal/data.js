/*SEARCH BY USING A CITY NAME (e.g. athens) OR A COMMA-SEPARATED CITY NAME ALONG WITH THE COUNTRY CODE (e.g. athens,gr)*/
const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");
/*SUBSCRIBE HERE FOR API KEY: https://home.openweathermap.org/users/sign_up*/
const apiKey = "4d8fb5b93d4af21d66a2948710284366";


"use strict"
const timeDelay = 250; // time delay refresh data
let refreshTimer = window.setInterval(renderData, timeDelay); // timer data opvragen van server

// jouw persoonlijke URL
const mijnDataURL = "https://data.softwaredeveloper.amsterdam/api/device/98b08e4d/latest"; 

const dataDiv = document.getElementById("dataDiv"); // hier komt de data

async function getSensorData() {
    let url = mijnDataURL;
    try {
        let response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderData() {
        let measurementRaw = await getSensorData();
        let measurement = measurementRaw.data[0];
        console.log(measurement);

         // Nieuwe Javascript date maken met de de datum en tijd van de meting
         let datum =  new Date(measurement.datum);

         // De meting gegevens wegschrijven naar de div
  dataDiv.innerHTML = `<h3>Datum: ${datum.toLocaleString()}</h3><p>Sensor: ${measurement.sensor}</p>`

}

renderData(); // start immediately

const data = {
    labels: ['Gas','Elektra','Water'],
    datasets:[
        {
            label: ["Energie Verbruik",],
            data: [4000, 5000 , 3000,],
            backgroundColor: ['#29EE99','#ffd662','#45b3e7',],
        }
    ]
}
const config = {
  type: 'bar',
  data: data,
  maintainAspectRatio: true,
}

new Chart(document.getElementsByClassName("js--chart--1"), config);


