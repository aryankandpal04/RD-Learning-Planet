// AOS
if (window.AOS) {
  AOS.init();
}
// ScrollReveal
if (window.ScrollReveal) {
  ScrollReveal().reveal('[data-aos]', {
    distance: '40px',
    duration: 900,
    easing: 'ease',
    origin: 'bottom',
    interval: 120
  });
}
// WOW.js
if (window.WOW) {
  new WOW().init();
}
