// Core JS Libraries (add these <script> tags to your HTML or import as needed)
// Example usage: <script src="js/libraries.js"></script>

// Typed.js
// <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
// Anime.js
// <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
// ScrollReveal
// <script src="https://unpkg.com/scrollreveal"></script>
// AOS
// <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
// WOW.js
// <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>
// Notyf
// <script src="https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.js"></script>
// Cleave.js
// <script src="https://cdn.jsdelivr.net/npm/cleave.js@1.6.0/dist/cleave.min.js"></script>
// Inputmask
// <script src="https://cdnjs.cloudflare.com/ajax/libs/inputmask/5.0.8/inputmask.min.js"></script>
// JustValidate
// <script src="https://cdn.jsdelivr.net/npm/just-validate@4.2.0/dist/just-validate.production.min.js"></script>
// Parsley.js
// <script src="https://cdn.jsdelivr.net/npm/parsleyjs@2.9.2/dist/parsley.min.js"></script>
// SweetAlert2
// <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
// Tooltipster
// <script src="https://cdnjs.cloudflare.com/ajax/libs/tooltipster/4.2.8/js/tooltipster.bundle.min.js"></script>
// Tippy.js
// <script src="https://unpkg.com/@popperjs/core@2"></script>
// <script src="https://unpkg.com/tippy.js@6"></script>
// Micromodal.js
// <script src="https://cdn.jsdelivr.net/npm/micromodal/dist/micromodal.min.js"></script>
// Popper.js
// <script src="https://unpkg.com/@popperjs/core@2"></script>
// FullCalendar
// <script src="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.8/index.global.min.js"></script>
// Chart.js
// <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
// GSAP
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
// Axios
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Lodash
// <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
// Day.js
// <script src="https://cdn.jsdelivr.net/npm/dayjs@1.11.10/dayjs.min.js"></script>
// UUID
// <script src="https://cdn.jsdelivr.net/npm/uuid@9.0.0/dist/umd/uuidv4.min.js"></script>
// CryptoJS
// <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>

// Example initialization for AOS, WOW.js, and ScrollReveal
if (window.AOS) {
  AOS.init();
}
if (window.WOW) {
  new WOW().init();
}
if (window.ScrollReveal) {
  ScrollReveal().reveal('[data-aos]', {
    distance: '40px',
    duration: 900,
    easing: 'ease',
    origin: 'bottom',
    interval: 120
  });
}
