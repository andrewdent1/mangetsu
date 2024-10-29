// Contact form functionality
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
});

// Scroll-based header color change
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 420) {
        header.classList.add('header-colored');
    } else {
        header.classList.remove('header-colored');
    }
});

// Show/Hide sidebar
function showSidebar() {
    document.querySelector('.sidebar').style.display = 'flex';
}

function hideSidebar() {
    document.querySelector('.sidebar').style.display = 'none';
}

document.querySelector('.close-btn')?.addEventListener('click', function(event) {
    event.preventDefault();
    hideSidebar();
});

let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName('slide');

    // Hide all slides and remove 'active' class
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    // Increment slide index
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    // Add 'active' class to the current slide
    slides[slideIndex - 1].classList.add('active');

    // Set timeout to change slide every 3 seconds
    setTimeout(showSlides, 4000);
}

