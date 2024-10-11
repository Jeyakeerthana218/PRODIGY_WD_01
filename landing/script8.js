window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'pink';  // Change background color when scrolled
    } else {
        navbar.style.backgroundColor = '#f0db97';  
    }
});
