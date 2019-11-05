window.addEventListener('scroll', showMenuOnScroll);

function showMenuOnScroll() {
  ///menu animation
  if (window.pageYOffset > windowHeight) {
    topMenu.style.top = 0;
    logoBW.style.width = '3.5vw';
    logoBW.style.top = '3.5vh';
    navBurger.style.top = '3.5vh';
    navBurger.style.fontSize = '2.5vw';
  } else {
    topMenu.style.top = '-12vh';
    logoBW.style.width = '6.5vw';
    logoBW.style.top = '5vh';
    navBurger.style.top = '5vh';
    navBurger.style.fontSize = '3.0vw';
  }
}
