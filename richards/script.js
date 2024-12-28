const navbar = document.querySelector('.navbar');
const cajun = document.querySelector('#cajun-image');
const img = document.querySelector('#logo');
window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('nav-active');
        cajun.classList.add('cajun-img');
        img.classList.add('logo-active');
    } else {
        navbar.classList.remove('nav-active');
        cajun.classList.remove('cajun-img');
        img.classList.remove('logo-active');
    }
};
