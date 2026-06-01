import './styles/styles.scss';

[...document.getElementsByClassName('header__menu')].forEach(function (e) {
  e.addEventListener('click', function (event) {
    e.classList.toggle('header__menu--opened');
  });
});