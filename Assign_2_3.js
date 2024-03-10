window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
        navbar.style.top = '0';
    } else {
        navbar.style.top = '-50px';
    }
}