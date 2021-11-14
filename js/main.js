let burgerMenu = document.querySelector('.burger-menu');
let menu = document.querySelector('.menu');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('overflow');
});