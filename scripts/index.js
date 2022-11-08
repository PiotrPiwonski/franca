/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */

// window.addEventListener('DOMContentLoaded', (event) => {
//   console.log('DOM fully loaded and parsed');
// });

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
});

particlesJS.load('root', 'assets/particles.json', () => {
  console.log('callback - particles.js config loaded');
});