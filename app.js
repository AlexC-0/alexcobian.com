(function () {
  function setupProfilePhoto() {
    const photoFigure = document.querySelector('.profile-photo');
    const photo = photoFigure ? photoFigure.querySelector('img') : null;
    if (!photoFigure || !photo) return;

    const src = 'assets/alex-profile-20260306.jpg?v=20260306-3';

    photo.addEventListener('load', function () {
      photoFigure.classList.remove('missing');
    });

    photo.addEventListener('error', function () {
      photo.remove();
      photoFigure.classList.add('missing');
    });

    photo.src = src;
  }

  function setupScrollTop() {
    const button = document.querySelector('.scroll-top');
    if (!button) return;

    const threshold = 280;

    function toggleVisibility() {
      if (window.scrollY > threshold) {
        button.classList.add('is-visible');
      } else {
        button.classList.remove('is-visible');
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility();

    button.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    setupProfilePhoto();
    setupScrollTop();
  });
})();
