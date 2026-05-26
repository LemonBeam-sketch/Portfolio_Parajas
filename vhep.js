const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
const overlay = document.querySelector('.menu-overlay');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  navbar.classList.remove('active');
  overlay.classList.remove('active');
});
