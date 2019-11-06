window.addEventListener('scroll', showMenuOnScroll);

function showMenuOnScroll() {
  ///menu animation
  if (window.pageYOffset > windowHeight) {
    topMenu.style.top = '0';
    logoBW.style.width = '3rem';
    navBurger.style.fontSize = '2.5rem';
    navBurger.style.padding = "10px 40px";
    document.getElementById("logoMainWrapper").style.padding = "10px 40px";
    document.getElementsByClassName("ekonomiczna-close-nav")[0].style.padding = "10px 40px";
  } else {
    topMenu.style.top = '-5rem';
    logoBW.style.width = '4rem';
    navBurger.style.fontSize = '3.5rem';
    navBurger.style.padding = "10px 60px";
    document.getElementById("logoMainWrapper").style.padding = "10px 60px";
    document.getElementsByClassName("ekonomiczna-close-nav")[0].style.padding = "10px 60px";
  }
}
