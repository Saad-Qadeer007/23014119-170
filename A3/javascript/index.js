// Function to handle the hamburger menu toggle
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.main-menu');

    hamburger.addEventListener('click', function () {
        menu.classList.toggle('active');
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
        this.classList.toggle('active');
    });
});

// Function for setting active class on the current page link
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".main-menu a");
    const currentPage = window.location.pathname.split("/").pop().toLowerCase();

    links.forEach(link => {
        const linkPage = link.getAttribute("href").toLowerCase();

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
});

// Function to handle the form submission
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form-container");

    form?.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Form submitted successfully!");
        resetForm();
    });

    function resetForm() {
        document.querySelector(".form-container").reset();
    }
});

// Function to render the features
const features = [
    {
        image: "images/experience.png",
        title: "Experience",
        description: "We have years of experience in the real estate market, ensuring you get the best deals."
    },
    {
        image: "images/trust.png",
        title: "Trust",
        description: "Our agents are fully certified and trusted to help you make the right choice."
    },
    {
        image: "images/variety.png",
        title: "Variety",
        description: "We offer around-the-clock support to answer all your questions and needs."
    }
];

const featuresSection = document.querySelector('.features-section');

features.forEach(feature => {
    const featureItem = document.createElement('div');
    featureItem.className = 'feature-item';

    featureItem.innerHTML = `
        <img src="${feature.image}" alt="${feature.title} icon">
        <h2>${feature.title}</h2>
        <p>${feature.description}</p>
    `;

    featuresSection?.appendChild(featureItem);
});

// Function to show shadow when mouse hovers over the image
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(function (card) {
        card.addEventListener('mouseover', function () {
            card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
            card.style.transition = 'box-shadow 0.3s ease';
        });

        card.addEventListener('mouseout', function () {
            card.style.boxShadow = 'none';
        });
    });
});

// Function to update the total buyers count
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.booking-form');
    const totalBuyersDisplay = document.getElementById('total-buyers');

    let totalBuyers = localStorage.getItem('totalBuyers');

    if (totalBuyers === null) {
        totalBuyers = 1500;
    } else {
        totalBuyers = parseInt(totalBuyers);
    }

    totalBuyersDisplay.textContent = `Total Buyers: ${totalBuyers}`;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        totalBuyers++;
        totalBuyersDisplay.textContent = `Total Buyers: ${totalBuyers}`;

        localStorage.setItem('totalBuyers', totalBuyers);

        form.reset();

        alert('Booking confirmed! Thank you.');
    });
});

// Function to handle the copyright year
document.addEventListener("DOMContentLoaded", function () {
    const copyrightYear = document.getElementById("copyright-year");
    const currentYear = new Date().getFullYear();
    copyrightYear.textContent = currentYear;
});

// Function to handle the add to favorite button
const projects = [
    {
        image: "./images/villa-JI8rcxfT.jpg",
        title: "Luxury Villa",
        description: "A stunning luxury villa with modern amenities.",
        link: "villa.html"
    },
    {
        image: "./images/Apartment-rsK66RvG.jpg",
        title: "Modern Apartment",
        description: "A stylish apartment in the heart of the city.",
        link: "appartment.html"
    },
    {
        image: "./images/commercial-1-0iYh9HD0.jpg",
        title: "Commercial Space",
        description: "A prime commercial space in a bustling area.",
        link: "commerical.html"
    },
    {
        image: "./images/villa-JI8rcxfT.jpg",
        title: "Lakeview Cabin",
        description: "A peaceful retreat surrounded by nature and a stunning lake view.",
        link: "lakeview-cabin.html"
    },
    {
        image: "./images/villa-JI8rcxfT.jpg",
        title: "City Loft",
        description: "A modern loft located in the bustling city center.",
        link: "city-loft.html"
    },
    {
        image: "./images/villa-JI8rcxfT.jpg",
        title: "Countryside Farmhouse",
        description: "A charming farmhouse surrounded by scenic countryside.",
        link: "farmhouse.html"
    }
];

let favorites = [];

function toggleFavorite(project, button) {
    const isFavorite = favorites.includes(project);

    if (isFavorite) {
        favorites = favorites.filter(fav => fav !== project);
        button.textContent = '♡ Add to Favorites';
        alert(`"${project.title}" has been removed from your favorites.`);
    } else {
        favorites.push(project);
        button.textContent = '❤️ Added to Favorites';
        alert(`"${project.title}" has been added to your favorites!`);
    }
}

const projectList = document.getElementById('projectList');

projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';

    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" class="btn">See More</a>
        <button class="favorite-btn">♡ Add to Favorites</button>
    `;

    projectList?.appendChild(card);

    const favoriteBtn = card.querySelector('.favorite-btn');
    
    favoriteBtn.addEventListener('click', () => {
        toggleFavorite(project, favoriteBtn);
    });
});

// Function to sort the properties by price
document.addEventListener("DOMContentLoaded", function () {
    const sortPriceBtn = document.getElementById("sortPriceBtn");
    const villaGrid = document.getElementById("villaGrid");
    const villaCards = Array.from(villaGrid.getElementsByClassName("villa-card"));

    function sortVillasByPrice() {
        const sortedVillas = villaCards.sort((a, b) => {
            const priceA = parseInt(a.getAttribute("data-price"));
            const priceB = parseInt(b.getAttribute("data-price"));
            return priceA - priceB;
        });

        sortedVillas.forEach(villa => {
            villaGrid.appendChild(villa);
        });
    }

    sortPriceBtn.addEventListener("click", sortVillasByPrice);
});

// Function to sort commercial properties by price
document.addEventListener("DOMContentLoaded", function () {
    const sortCommercialPriceBtn = document.getElementById("sortCommercialPriceBtn");
    const commercialGrid = document.getElementById("commercialGrid");
    const commercialCards = Array.from(commercialGrid.getElementsByClassName("property-card"));

    function sortCommercialPropertiesByPrice() {
        const sortedCommercials = commercialCards.sort((a, b) => {
            const priceA = parseInt(a.getAttribute("data-price"));
            const priceB = parseInt(b.getAttribute("data-price"));
            return priceA - priceB;
        });

        sortedCommercials.forEach(property => {
            commercialGrid.appendChild(property);
        });
    }

    sortCommercialPriceBtn.addEventListener("click", sortCommercialPropertiesByPrice);
});

// Function to sort apartments by price
document.addEventListener("DOMContentLoaded", function () {
    const sortApartmentPriceBtn = document.getElementById("sortApartmentPriceBtn");
    const apartmentGrid = document.getElementById("apartmentGrid");
    const apartmentCards = Array.from(apartmentGrid.getElementsByClassName("apartment-card"));

    function sortApartmentPropertiesByPrice() {
        const sortedApartments = apartmentCards.sort((a, b) => {
            const priceA = parseInt(a.getAttribute("data-price"));
            const priceB = parseInt(b.getAttribute("data-price"));
            return priceA - priceB;
        });

        sortedApartments.forEach(apartment => {
            apartmentGrid.appendChild(apartment);
        });
    }

    sortApartmentPriceBtn.addEventListener("click", sortApartmentPropertiesByPrice);
});
