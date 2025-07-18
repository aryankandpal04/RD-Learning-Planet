// particles-init.js
particlesJS('hero-particles', {
  particles: {
    number: { value: 40, density: { enable: true, value_area: 800 } },
    color: { value: ['#22d3ee', '#f97316', '#fff', '#1e293b'] },
    shape: { type: 'circle' },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 120,
      color: '#22d3ee',
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.2,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: false },
      resize: true
    },
    modes: {
      repulse: { distance: 80, duration: 0.4 }
    }
  },
  retina_detect: true
}); 