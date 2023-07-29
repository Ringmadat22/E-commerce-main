const menuBtn = document.querySelector('.menu-btn')
const navlinks = document.querySelector('.nav-links')

menuBtn.addEventListener('click', () => {
    navlinks.classList.toggle('mobile-menu')
});

function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "mobile-menu") {
      x.className += " menu-btn";
    } else {
      x.className = "menu-btn";
    }
  }

