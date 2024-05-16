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
      location: "Kensington, United States",
      dedicated: "1974,November,19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986,January,10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983,December,2",
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
        dedicated: "1984,September,25",
        area: 26683,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/800x500/manila-philippines-temple-lds-685730-wallpaper.jpg"
    },
    {
        templeName: "Laie Hawaii",
        location: "Laie, Hawaii",
        dedicated: "1919,November,27",
        area: 47000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/800x500/laie-temple-775370-wallpaper.jpg"
    },
    {
        templeName: "Seoul Korea",
        location: "South Korea",
        dedicated: "1985,December,14",
        area: 28057,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/seoul-korea/800x500/seoul-korea-temple-lds-424784-wallpaper.jpg"
    },
    {
        templeName: "Sapporo Japan",
        location: "Sapporo Japan",
        dedicated: "2016,August,21",
        area: 12437,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/800x500/sapporo-japan-exterior-night-1945721.jpg"
    }
  ];

 
  function createAndAppendTemple(temple) {
    // div
    const templeDiv = document.createElement('div');
    templeDiv.className = "temple";

    // heading
    const heading = document.createElement('h2');
    heading.textContent = temple.templeName;

    //dedicated div
    const div2 = document.createElement('div');
    div2.className = "temple-details";
    const pLabel2 = document.createElement('p');
    pLabel2.textContent = "Dedicated:";
    pLabel2.className = "label";
    const pValue2 = document.createElement('p');
    pValue2.textContent = temple.dedicated;
    div2.appendChild(pLabel2);
    div2.appendChild(pValue2);

     //location div
     const div1 = document.createElement('div');
     div1.className = "temple-details";
     const pLabel1 = document.createElement('p');
     pLabel1.textContent = "Location:"
     pLabel1.className = "label";
     const pValue1 = document.createElement('p');
     pValue1.textContent = temple.location;
     div1.appendChild(pLabel1);
     div1.appendChild(pValue1);

    //size div
    const div3 = document.createElement('div');
    div3.className = "temple-details";
    const pLabel3 = document.createElement('p');
    pLabel3.textContent = "Size:";
    pLabel3.className = "label";
    const pValue3 = document.createElement('p');
    pValue3.textContent = `${temple.area} sq ft`;
    div3.appendChild(pLabel3);
    div3.appendChild(pValue3);

    //img
    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.width = "400";
    img.height = "250";
    img.loading = "lazy";

    templeDiv.appendChild(heading);
    templeDiv.appendChild(div1);
    templeDiv.appendChild(div2);
    templeDiv.appendChild(div3);
    templeDiv.appendChild(img);

    document.querySelector('.temple-display').appendChild(templeDiv);
}

function displayTemples(displaySelection) {

    console.log(`displaying temples: ${displaySelection}`)

    document.querySelector('.temple-display').innerHTML = "";

    for (let i = 0; i < temples.length; i++) {
        switch (displaySelection) {
            case 'old':
                if (parseInt(temples[i].dedicated.substring(0, 4)) < 1900) {
                    createAndAppendTemple(temples[i]);
                }
                break;
            case 'new':
                if (parseInt(temples[i].dedicated.substring(0, 4)) > 2000) {
                    createAndAppendTemple(temples[i]);
                }
                break;
            case 'large':
                if (temples[i].area > 90000) {
                    createAndAppendTemple(temples[i]);
                }
                break;
            case 'small':
                if (temples[i].area < 10000) {
                    createAndAppendTemple(temples[i]);
                }
                break;
            default:
                createAndAppendTemple(temples[i]);
                break;
        }
    }
}
displayTemples("home");