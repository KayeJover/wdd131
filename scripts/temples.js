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
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('open');
    if (nav.classList.contains('open')) {
        menuToggle.innerHTML = '&#10005;'; // Change to close icon (X)
    } else {
        menuToggle.innerHTML = '&#9776;'; // Change back to hamburger icon
    }
});
