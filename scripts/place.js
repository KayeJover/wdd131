
// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Update the content of the elements with the corresponding ids
const currentYearElement = document.getElementById('currentyear');
if (currentYearElement) {
    currentYearElement.textContent = currentYear;
}

const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
    lastModifiedElement.textContent = 'Last Modification: ' + lastModifiedDate;
}


let temp = 33;
let wind = 13;
let windchill = "N/A";

function calculateWindChill(temperature, windSpeed) {
    return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2) + "°C";
};

document.querySelector("#wind-chill").textContent = (temp <= 10 && wind >= 4.8) ? calculateWindChill(temp, wind) : "N/A";