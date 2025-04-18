// Hamburger menu functionality

// Hamburger menu functionality
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const mainMenu = document.querySelector('.main-menu');
    const hamburgerIcon = hamburger.querySelector('i');
    
    hamburger.addEventListener('click', function() {
        // Toggle the visibility of the menu and ensure it's displayed horizontally
        mainMenu.classList.toggle('hidden');
        mainMenu.classList.toggle('flex'); // This ensures the horizontal display when toggled
        
        if (hamburgerIcon.classList.contains('fa-bars')) {
            hamburgerIcon.classList.remove('fa-bars');
            hamburgerIcon.classList.add('fa-times');
        } else {
            hamburgerIcon.classList.remove('fa-times');
            hamburgerIcon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking on a link (for mobile)
    const menuLinks = document.querySelectorAll('.main-menu a, .footer-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 768) {
                mainMenu.classList.add('hidden');
                mainMenu.classList.remove('flex');
                hamburgerIcon.classList.remove('fa-times');
                hamburgerIcon.classList.add('fa-bars');
            }
        });
    });
});


// Function for sorting in villa page
document.addEventListener('DOMContentLoaded', function() {
    const sortBtn = document.getElementById('sortPriceBtn');
    const villaGrid = document.getElementById('villaGrid');

    sortBtn.addEventListener('click', function() {
        const villaCards = Array.from(villaGrid.querySelectorAll('.villa-card'));
        villaCards.sort((a, b) => {
            return a.dataset.price - b.dataset.price;
        });
        villaGrid.innerHTML = '';
        villaCards.forEach(card => {
            villaGrid.appendChild(card);
        });
    });
});

// Function for handling sorting in the commercial page
document.addEventListener("DOMContentLoaded", function () {
    const sortButton = document.getElementById("sortCommercialPriceBtn");
    const grid = document.getElementById("commercialGrid");

    sortButton.addEventListener("click", function () {
        const cards = Array.from(grid.querySelectorAll(".property-card"));
        cards.sort(function (a, b) {
            return parseInt(a.getAttribute("data-price")) - parseInt(b.getAttribute("data-price"));
        });
        cards.forEach(function (card) {
            grid.appendChild(card);
        });
    });
});

// Function for handling sorting in the apartment page
document.addEventListener("DOMContentLoaded", function () {
    const sortApartmentPriceBtn = document.getElementById("sortApartmentPriceBtn");
    const apartmentGrid = document.getElementById("apartmentGrid");

    function sortApartmentPropertiesByPrice() {
        const apartmentCards = Array.from(apartmentGrid.getElementsByClassName("apartment-card"));
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
    document.getElementById("copyright-year").textContent = new Date().getFullYear();
});

// Active link highlighting - IMPROVED VERSION
const navLinks = document.querySelectorAll(".main-menu a, .footer-menu a");
let currentPage = window.location.pathname.split("/").pop().toLowerCase();

if (currentPage === "" || currentPage === "index.html") {
    currentPage = "index.html";
}

navLinks.forEach(link => {
    const linkPage = link.getAttribute("href").toLowerCase();
    link.classList.remove("text-amber-500", "font-bold", "border-b-2", "border-amber-500");
    if (linkPage === currentPage || 
       (currentPage === "" && linkPage === "index.html") ||
       (currentPage === "index.html" && linkPage === "index.html")) {
        link.classList.add("text-amber-500");
        link.classList.add("font-bold");
        if (link.parentElement.classList.contains('main-menu')) {
            link.classList.add("border-b-2");
            link.classList.add("border-amber-500");
        }
    }
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
    const form = document.querySelector('form');
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
        button.innerHTML = '<i class="far fa-heart"></i> Add to Favorites';
        button.classList.remove('bg-amber-600');
        button.classList.add('bg-amber-500');
        alert(`"${project.title}" has been removed from your favorites.`);
    } else {
        favorites.push(project);
        button.innerHTML = '<i class="fas fa-heart"></i> Added to Favorites';
        button.classList.remove('bg-amber-500');
        button.classList.add('bg-amber-600');
        alert(`"${project.title}" has been added to your favorites!`);
    }
}

const projectList = document.getElementById('projectList');

projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card bg-white p-5 rounded-lg shadow-lg text-black transition-transform duration-300 hover:-translate-y-1 w-full md:w-[45%] lg:w-[30%] xl:w-[300px] mb-5';

    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="w-full h-[200px] object-cover rounded mb-4">
        <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
        <p class="mb-4">${project.description}</p>
        <div class="flex flex-wrap gap-2">
            <a href="${project.link}" class="btn bg-amber-500 text-white px-5 py-2 rounded hover:bg-amber-600 transition-colors duration-300 inline-block">
                See More
            </a>
            <button class="favorite-btn bg-amber-500 text-white px-5 py-2 rounded hover:bg-amber-600 transition-colors duration-300 inline-block">
                <i class="far fa-heart"></i> Add to Favorites
            </button>
        </div>
    `;

    projectList.appendChild(card);

    const favoriteBtn = card.querySelector('.favorite-btn');
    
    favoriteBtn.addEventListener('click', () => {
        toggleFavorite(project, favoriteBtn);
    });
});
