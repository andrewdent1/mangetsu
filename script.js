document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
});

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 750) {
        header.classList.add('header-colored');
    } else {
        header.classList.remove('header-colored');
    }
});

function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

document.querySelector('.close-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action
    // Code to close the sidebar
});