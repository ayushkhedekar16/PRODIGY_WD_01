window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#fff'; 
        navbar.style.transition = 'background-color 0.3s ease';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'; 
    }
});