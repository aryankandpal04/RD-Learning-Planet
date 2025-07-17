// Sunburst menu toggle and accessibility
const sunburstMenu = document.querySelector('.sunburst-menu-container');
const sunburstBtn = document.getElementById('sunburstMenuBtn');
const sunburstItems = document.querySelectorAll('.sunburst-menu-item');
let menuOpen = false;
function openMenu() {
  sunburstMenu.classList.add('active');
  sunburstBtn.setAttribute('aria-expanded', 'true');
  sunburstItems[0].setAttribute('tabindex', '0');
  sunburstItems[0].focus();
  menuOpen = true;
}
function closeMenu() {
  sunburstMenu.classList.remove('active');
  sunburstBtn.setAttribute('aria-expanded', 'false');
  sunburstItems.forEach(item => item.setAttribute('tabindex', '-1'));
  sunburstBtn.focus();
  menuOpen = false;
}
sunburstBtn.addEventListener('click', () => {
  if (menuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});
sunburstBtn.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && !menuOpen) {
    e.preventDefault();
    openMenu();
  } else if (e.key === 'Escape' && menuOpen) {
    closeMenu();
  }
});
sunburstItems.forEach((item, idx) => {
  item.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      sunburstItems[(idx + 1) % sunburstItems.length].focus();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      sunburstItems[(idx - 1 + sunburstItems.length) % sunburstItems.length].focus();
    } else if (e.key === 'Escape') {
      closeMenu();
    }
  });
});
document.addEventListener('click', (e) => {
  if (menuOpen && !sunburstMenu.contains(e.target)) {
    closeMenu();
  }
}); 