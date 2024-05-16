/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.page-header__nav');
const navToggle = document.querySelector('.page-header__menu-button');


navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('header__nav--closed')) {
    navMain.classList.remove('header__nav--closed');
    navMain.classList.add('header__nav--opened');
  } else {
    navMain.classList.add('header__nav--closed');
    navMain.classList.remove('header__nav--opened');
  }
});
