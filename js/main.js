const clickButton = document.querySelector('.menu-icon');

clickButton.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show-nav');
});
