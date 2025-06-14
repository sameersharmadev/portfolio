//IMAGE GALLARY
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.carousel-image');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.add('opacity-0'); 
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.remove('opacity-0');
    }
    images[currentIndex].classList.remove('opacity-0');
    setInterval(showNextImage, 3000); 
});
//BUTTONS
let buttons = document.getElementsByClassName('view-menu');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        window.location.href = './menu.html';
    });
}
