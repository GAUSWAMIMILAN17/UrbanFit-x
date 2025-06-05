const toggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click',() => {
    navLinks.classList.toggle('active');
});
