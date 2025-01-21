function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}
document.querySelectorAll('.dropdown').forEach(function (dropdown) {
    dropdown.addEventListener('mouseover', function () {
        const menu = dropdown.querySelector('.dropdown-menu');
        menu.style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', function () {
        const menu = dropdown.querySelector('.dropdown-menu');
        menu.style.display = 'none';
    });
});



let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll(".slide");
    slides[currentSlide].classList.remove("active");

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
}
document.addEventListener("DOMContentLoaded", function () {
    const topNav = document.querySelector(".top-nav");
    const bestProducts = document.querySelector(".best-products");

    window.addEventListener("scroll", function () {
        const bestProductsTop = bestProducts.getBoundingClientRect().top;
        const bestProductsBottom = bestProducts.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // Check if the best-products section is in view
        if (bestProductsTop < windowHeight && bestProductsBottom > 0) {
            topNav.classList.add("scrolled");
        } else {
            topNav.classList.remove("scrolled");
        }
    });
});


//filter-nav motion
// JavaScript to toggle fixed class on filter-nav
document.addEventListener("DOMContentLoaded", function () {
    const filterNav = document.querySelector(".filter-nav");
    const filterNavOffset = filterNav.offsetTop;

    window.addEventListener("scroll", function () {
        if (window.scrollY > filterNavOffset) {
            filterNav.classList.add("fixed"); // Add fixed class when scrolled past
        } else {
            filterNav.classList.remove("fixed"); // Remove fixed class when above
        }
    });
});


//filter-nav underline
    // Get the current page file name (e.g., "rg.html")
    const currentPage = window.location.pathname.split("/").pop();

    // Select all links in the filter navigation
    const filterLinks = document.querySelectorAll(".filter-nav a");

    // Loop through the links to find the one that matches the current page
    filterLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });



// Initialize the slideshow
document.addEventListener("DOMContentLoaded", function () {
    showSlide(currentSlide);
});




// Slideshow functionality for the product card
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slideshow-card .slide');
    let currentSlide = 0;

    function changeSlide() {
        // Hide current slide
        slides[currentSlide].classList.remove('active');
        // Move to the next slide, loop back if at the last one
        currentSlide = (currentSlide + 1) % slides.length;
        // Show the new slide
        slides[currentSlide].classList.add('active');
    }

    // Automatically switch slides every 3 seconds
    setInterval(changeSlide, 3000);
});

 // JavaScript to handle form submission and display the confirmation message
    document.getElementById('subscribeForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting and refreshing the page

        const email = document.getElementById('emailInput').value;

        if (email) {
            // Show the confirmation message
            const confirmationMessage = document.getElementById('confirmationMessage');
            confirmationMessage.style.display = 'block'; // Display confirmation message
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Close the confirmation message when the close button is clicked
    document.getElementById('closeMessage').addEventListener('click', function() {
        const confirmationMessage = document.getElementById('confirmationMessage');
        confirmationMessage.style.display = 'none'; // Hide the confirmation message
    });



// Add JavaScript for sign-up form submission alert
        document.getElementById("signupForm").addEventListener("submit", function(event) {
            event.preventDefault();  // Prevent form submission for demo purposes
            alert("Sign Up successful!");  // Show success message
        });


// Add JavaScript for form submission alert
        document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault();  // Prevent form submission for demo purposes
            alert("Login successful!");  // Show success message
        });