// Fade-in scroll animation observer
const fadeObserver = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      fadeObserver.unobserve(e.target);
    }
  }),
  { threshold: 0.10, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.fade-up, .service-card, .draw-line').forEach(el => fadeObserver.observe(el));

// Mobile hamburger menu
(function () {
  const burger = document.getElementById('nav-burger');
  const header = document.querySelector('.main-header');
  if (!burger || !header) return;
  burger.addEventListener('click', function () {
    const isOpen = header.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', isOpen);
  });
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    a.addEventListener('click', function () {
      header.classList.remove('nav-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
})();

// Animated number counter
function animateCount(el) {
  const target = parseInt(el.dataset.value, 10);
  const duration = 1200;
  const t0 = performance.now();
  (function step(now) {
    const p = Math.min((now - t0) / duration, 1);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(e * target);
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target;
  })(performance.now());
}

// Trigger counter when stat numbers come into view
const statObserver = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) {
      animateCount(e.target);
      statObserver.unobserve(e.target);
    }
  }),
  { threshold: 0.5 }
);
document.querySelectorAll('.stat-number[data-value]').forEach(el => statObserver.observe(el));
