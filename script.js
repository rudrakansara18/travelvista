/* =====================================================
   TRAVELVISTA - JAVASCRIPT
   Vanilla JavaScript only
   ===================================================== */


// ================= LOADING SCREEN =================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 700);

});


// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (navMenu.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", function () {

        navMenu.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// ================= DESTINATION SEARCH =================

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function () {

    const destination =
        document.getElementById("searchDestination").value.trim();

    const date =
        document.getElementById("travelDate").value;

    const travelers =
        document.getElementById("travelers").value;

    const searchMessage =
        document.getElementById("searchMessage");


    if (destination === "") {

        searchMessage.textContent =
            "Please enter a destination.";

        searchMessage.className =
            "form-message error";

        return;
    }


    searchMessage.textContent =
        `Searching for your trip to ${destination}...`;

    searchMessage.className =
        "form-message success";


    // Show information in console
    console.log({
        destination: destination,
        date: date,
        travelers: travelers
    });

});


// ================= DESTINATION MODAL =================

const destinationModal =
    document.getElementById("destinationModal");

const modalDestination =
    document.getElementById("modalDestination");

const modalDescription =
    document.getElementById("modalDescription");


const destinationDescriptions = {

    Paris:
        "Discover the Eiffel Tower, Louvre Museum, charming streets and delicious French cuisine.",

    Bali:
        "Enjoy beautiful beaches, temples, rice terraces, local culture and tropical adventures.",

    Dubai:
        "Experience modern architecture, luxury shopping, desert safaris and unforgettable attractions.",

    Switzerland:
        "Explore breathtaking Alps, peaceful lakes, scenic trains and beautiful mountain villages.",

    Manali:
        "Enjoy Himalayan landscapes, snow-covered mountains, adventure activities and peaceful valleys.",

    Goa:
        "Relax on beautiful beaches, enjoy local food, water activities and spectacular sunsets."

};


document.querySelectorAll(".explore-btn").forEach(button => {

    button.addEventListener("click", function () {

        const destination =
            this.dataset.destination;

        const country =
            this.dataset.country;


        modalDestination.textContent =
            `${destination}, ${country}`;

        modalDescription.textContent =
            destinationDescriptions[destination];


        destinationModal.classList.add("show");

    });

});


// ================= PACKAGE BOOKING MODAL =================

const bookingModal =
    document.getElementById("bookingModal");

const selectedPackage =
    document.getElementById("selectedPackage");


document.querySelectorAll(".book-btn").forEach(button => {

    button.addEventListener("click", function () {

        const packageName =
            this.dataset.package;

        selectedPackage.textContent =
            packageName;

        bookingModal.classList.add("show");

    });

});


// ================= CLOSE MODALS =================

document.querySelectorAll(".close-modal").forEach(button => {

    button.addEventListener("click", function () {

        destinationModal.classList.remove("show");
        bookingModal.classList.remove("show");

    });

});


// Close modal from button

document.querySelector(".close-modal-btn")
    .addEventListener("click", function () {

        destinationModal.classList.remove("show");

    });


// Close modal by clicking outside

window.addEventListener("click", function (event) {

    if (event.target === destinationModal) {
        destinationModal.classList.remove("show");
    }

    if (event.target === bookingModal) {
        bookingModal.classList.remove("show");
    }

});


// ================= BOOKING FORM =================

const bookingForm =
    document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("bookingName").value.trim();

    const email =
        document.getElementById("bookingEmail").value.trim();

    const travelers =
        document.getElementById("bookingTravelers").value;

    const bookingMessage =
        document.getElementById("bookingMessage");


    if (name === "" || email === "" || travelers === "") {

        bookingMessage.textContent =
            "Please fill in all fields.";

        bookingMessage.className =
            "form-message error";

        return;
    }


    bookingMessage.textContent =
        "Booking request submitted successfully!";

    bookingMessage.className =
        "form-message success";


    // Clear form

    bookingForm.reset();

});


// ================= CONTACT FORM =================

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const destination =
        document.getElementById("destination").value;

    const message =
        document.getElementById("message").value.trim();

    const contactMessage =
        document.getElementById("contactMessage");


    // Simple email validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        destination === "" ||
        message === ""
    ) {

        contactMessage.textContent =
            "Please fill in all fields.";

        contactMessage.className =
            "form-message error";

        return;
    }


    if (!emailPattern.test(email)) {

        contactMessage.textContent =
            "Please enter a valid email address.";

        contactMessage.className =
            "form-message error";

        return;
    }


    if (phone.length < 10) {

        contactMessage.textContent =
            "Please enter a valid phone number.";

        contactMessage.className =
            "form-message error";

        return;
    }


    contactMessage.textContent =
        "Thank you! Your message has been submitted successfully.";

    contactMessage.className =
        "form-message success";


    contactForm.reset();

});


// ================= NEWSLETTER =================

const newsletterForm =
    document.getElementById("newsletterForm");


newsletterForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const email =
        document.getElementById("newsletterEmail")
            .value.trim();

    const newsletterMessage =
        document.getElementById("newsletterMessage");


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        newsletterMessage.textContent =
            "Please enter a valid email address.";

        newsletterMessage.className =
            "form-message error";

        return;
    }


    newsletterMessage.textContent =
        "Thank you for subscribing to TravelVista!";

    newsletterMessage.className =
        "form-message success";


    newsletterForm.reset();

});


// ================= SCROLL REVEAL =================

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;


        if (elementTop < windowHeight - 80) {

            element.classList.add("active");

        }

    });

}


window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ================= COUNTER ANIMATION =================

const counters =
    document.querySelectorAll(".counter");

let countersStarted = false;


function startCounters() {

    if (countersStarted) return;

    const statsSection =
        document.querySelector(".stats");

    const position =
        statsSection.getBoundingClientRect().top;


    if (position < window.innerHeight - 100) {

        countersStarted = true;


        counters.forEach(counter => {

            const target =
                Number(counter.dataset.target);

            let current = 0;

            const increment =
                Math.ceil(target / 80);


            const updateCounter = () => {

                current += increment;

                if (current >= target) {
                    current = target;
                }

                counter.textContent =
                    current.toLocaleString() + "+";


                if (current < target) {

                    requestAnimationFrame(updateCounter);

                }

            };


            updateCounter();

        });

    }

}


window.addEventListener("scroll", startCounters);

startCounters();


// ================= ACTIVE NAVIGATION =================

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener("scroll", updateActiveNav);


// ================= BACK TO TOP =================

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================= CURRENT YEAR =================

document.getElementById("currentYear")
    .textContent = new Date().getFullYear();


// ================= ESC KEY CLOSE MODALS =================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        destinationModal.classList.remove("show");
        bookingModal.classList.remove("show");

    }

});