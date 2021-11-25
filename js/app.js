const elHamburgerBtn = document.querySelector(".btn-burger");
const elHeader = document.querySelector(".header");

elHamburgerBtn.addEventListener('click', () => {
    elHeader.classList.toggle("header--open");
})