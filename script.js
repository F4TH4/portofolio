// toggle 
const navbar = document.querySelector('.navbarMenu');

// saat di klik
document.querySelector('#hamburgerr').onclick = () => {
  navbar.classList.toggle ('active');
};

// diklik hilang
const hamburgerr = document.querySelector('#hamburgerr');


document.addEventListener('click', function (e) {
    if (!hamburgerr.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove('active');
  }
});


// animasi scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});



window.addEventListener("load", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});





document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    // nutup menu hamburger (kalau mobile)
    document.querySelector(".navbarMenu")?.classList.remove("active");
  });
});
