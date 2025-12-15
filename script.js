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