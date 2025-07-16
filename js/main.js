// Typed.js animation for hero
if (window.Typed && document.getElementById('typed-text')) {
  new Typed('#typed-text', {
    strings: ['1st–12th Classes', 'BCA, BSc, BBA, B.Pharma', 'Sainik & Navodaya Prep', 'Hindi & English Medium'],
    typeSpeed: 55, backSpeed: 30, loop: true
  });
}

// Notyf for enquiry form
if (window.Notyf && document.getElementById('contact-form')) {
  const form = document.getElementById('contact-form');
  const notyf = new Notyf();
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    notyf.success('Form submitted successfully!');
    form.reset();
  });
}
