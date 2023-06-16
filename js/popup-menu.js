const burger = document.querySelector('.burger');
const burgerClose = document.querySelector('.close-button');
const menu = document.querySelector('.popup-menu');
const body = document.querySelector('.body');

burger.addEventListener('click', () => {
  menu.classList.add('popup-menu--active');
  body.classList.add('body-active');
});

burgerClose.addEventListener('click', () => {
  menu.classList.remove('popup-menu--active');
  body.classList.remove('body-active');
});