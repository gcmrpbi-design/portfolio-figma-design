const menuButton = document.querySelector('.menu-button');
const links = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const isOpen = links.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
links.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  links.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
