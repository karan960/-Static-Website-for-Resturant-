// animations.js

document.addEventListener('DOMContentLoaded', function () {
  // Add loaded class to body
  document.body.classList.add('loaded');

  // Animate reservation form on contact page
  const reservationForm = document.querySelector('.reservation-form');
  if (reservationForm) {
    reservationForm.classList.add('loaded');
  }

  // Animate footer sections
  const footer = document.querySelector('footer');
  if (footer) {
    footer.classList.add('loaded');
  }

  // Animate About section on index page
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    setTimeout(() => {
      aboutSection.style.opacity = '1';
      aboutSection.style.transform = 'translateY(0)';
    }, 500);
  }
});
