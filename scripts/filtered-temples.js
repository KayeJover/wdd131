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

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/2018/800x500/Payson-Utah-Temple02.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Cebu City",
        location: "Cebu City, Cebu",
        dedicated: "2010, June, 13",
        area: 29556,
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/1b2c438fbf03dce153643292f31889fcc54dd95a/full/320%2C/0/default"
    },
    {
        templeName: "Metro Manila",
        location: "Quezon City, Manila",
        dedicated: "1984, September, 25",
        area: 26683,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/800x500/manila-philippines-temple-lds-685730-wallpaper.jpg"
    },
    {
        templeName: "Laie Hawaii",
        location: "Laie, Hawaii",
        dedicated: "1919, November, 27",
        area: 47000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/800x500/laie-temple-775370-wallpaper.jpg"
    },
    {
        templeName: "Seoul Korea",
        location: "South Korea",
        dedicated: "1985, December, 14",
        area: 28057,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/seoul-korea/800x500/seoul-korea-temple-lds-424784-wallpaper.jpg"
    },
    {
        templeName: "Sapporo Japan",
        location: "Sapporo Japan",
        dedicated: "2016, August, 21",
        area: 12437,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/800x500/sapporo-japan-exterior-night-1945721.jpg"
    }
  ];