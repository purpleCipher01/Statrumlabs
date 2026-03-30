// Fade-in scroll animation for about page elements
const fadeObserver = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      fadeObserver.unobserve(e.target);
    }
  }),
  { threshold: 0.10, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.fade-up, .draw-line').forEach(el => fadeObserver.observe(el));

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
