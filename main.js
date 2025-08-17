//hero section
tsParticles.load("particles-js", {
  background: { color: "transparent" },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 }
    }
  },
  particles: {
    color: { value: "#3b82f6" },
    links: { color: "#3b82f6", distance: 150, enable: true, opacity: 0.4, width: 1 },
    collisions: { enable: false },
    move: { direction: "none", enable: true, outModes: { default: "bounce" }, speed: 1 },
    number: { density: { enable: true, area: 800 }, value: 50 },
    opacity: { value: 0.5 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 4 } }
  },
  detectRetina: true
});
