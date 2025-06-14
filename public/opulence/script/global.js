document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('fade-in');
});

document.querySelectorAll('.contact').forEach(function(contactLink) {
    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('contact-popup').classList.remove('hidden');
    });
});

document.getElementById('contact-popup').addEventListener('click', function(event) {
    if (event.target === this) {
        this.classList.add('hidden');
    }
});

document.getElementById('submit-query').addEventListener('click', function() {
    document.getElementById('contact-popup').classList.add('hidden');
});

document.getElementById('submit-reservation').addEventListener('click', function(event) {
    event.preventDefault();
    
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let guests = document.getElementById('guests').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;

    if (firstName && lastName && email && phone && guests && date && time) {
        alert('Reservation submitted successfully!');
        document.getElementById('reserve-popup').classList.add('hidden');
        document.getElementById('reserve-form').reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
});

document.querySelectorAll('.booking').forEach(function(bookingButton) {
    bookingButton.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('reserve-popup').classList.remove('hidden');
    });
});

document.getElementById('reserve-popup').addEventListener('click', function(event) {
    if (event.target === this) {
        this.classList.add('hidden');
    }
});



const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const closeButton = document.getElementById("close-button");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

closeButton.addEventListener("click", () => {
    mobileMenu.classList.add('hidden');
});
