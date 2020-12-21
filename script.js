if (
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype
  ) {
  let observer = new IntersectionObserver(entries => {
    if (entries[0].boundingClientRect.y < 0) {
      document.body.classList.add("header-not-at-top");
    } else {
      document.body.classList.remove("header-not-at-top");
    }
  });
  observer.observe(document.querySelector("#top-of-site-pixel-anchor"));
}


const hamburger = document.querySelector(".menu-btn");
hamburger.addEventListener("click", toggleBtn, false);

const navBar = document.querySelector(".fixed-nav");

const flyoutMenu = document.querySelector(".slide-menu");
flyoutMenu.addEventListener("click", hideMenu, false);

var menuVisible = false;
  
function toggleBtn() {
  menuVisible = !menuVisible
  if (menuVisible) {
    flyoutMenu.classList.add("show");
    navBar.classList.add("menu-visible");

    document.body.style.overflow = "hidden";
    } else {
    hideMenu();
  }
}
  
function hideMenu() {
    flyoutMenu.classList.remove("show");
    navBar.classList.remove("menu-visible");
    event.stopPropagation();

    document.body.style.overflow = "auto";
} 

// for (i = 0; i < 2; i++) {
//     menuBtn[i].addEventListener("click", hideMenu, false);
// }