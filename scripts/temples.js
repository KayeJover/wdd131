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
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('header');

hamburgerMenu.addEventListener('click', function () {
    header.querySelector('h1').style.display = 'none';
    header.querySelector('.hamburger-menu').style.display = 'none';
    header.classList.toggle('showNav');
    navLinks.classList.toggle('show');

    createCloseButton(); // create and show close button
});

function createCloseButton() {
    const closeButton = document.createElement('button');
    closeButton.textContent = '❌';
    closeButton.classList.add('close-button');
    closeButton.addEventListener('click', function () {
        header.querySelector('h1').style.display = 'block';
        header.querySelector('.hamburger-menu').style.display = 'block';
        //header.querySelector('nav').style.display = 'none';
        /*if (window.innerWidth >= 1100) {
            header.querySelector('.hamburger-menu').style.display = 'none';
            header.querySelector('nav').style.display = 'flex';
        } else {
            header.querySelector('.hamburger-menu').style.display = 'block';
        }*/
        header.classList.toggle('showNav');
        navLinks.classList.toggle('show');
        closeButton.remove(); // remove close button
    });
    header.appendChild(closeButton);
}

window.addEventListener('resize', function () {
    if (this.window.innerWidth >= 1050) {
        header.querySelector('.hamburger-menu').style.display = 'none';
    } else {
        header.querySelector('.hamburger-menu').style.display = 'block';
    }
});
