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
    lastModifiedElement.textContent = 'Last modified: ' + lastModifiedDate;
}

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    // Change the hamburger icon to an 'X'
    if (nav.classList.contains('active')) {
        menuToggle.textContent = '✕'; // 'X' character
    } else {
        menuToggle.textContent = '☰'; // Hamburger icon
    }
});