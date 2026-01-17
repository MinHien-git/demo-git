const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', function(e) {
  e.stopPropagation();
  menu.classList.toggle('active');
});

document.addEventListener('click', function(event) {
  if (!menuToggle.contains(event.target) && !menu.contains(event.target)) {
    menu.classList.remove('active');
  }
});

const menuLinks = menu.querySelectorAll('a');
menuLinks.forEach(link => {
  link.addEventListener('click', function() {
    menu.classList.remove('active');
  });
});