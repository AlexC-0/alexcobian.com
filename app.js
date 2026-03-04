(function () {
  function setupProfilePhoto() {
    const photoFigure = document.querySelector('.profile-photo');
    const photo = photoFigure ? photoFigure.querySelector('img') : null;
    if (!photoFigure || !photo) return;

    const candidates = [
      'assets/alex-profile.jpg',
      'assets/alex-profile.jpg.jfif',
      'assets/alex-profile.jfif',
      'assets/alex-profile.jpeg',
      'assets/alex-profile.png',
      'assets/alex-profile.webp'
    ];

    let index = 0;

    function tryNext() {
      if (index >= candidates.length) {
        photo.remove();
        photoFigure.classList.add('missing');
        return;
      }
      photo.src = candidates[index++];
    }

    photo.addEventListener('load', function () {
      photoFigure.classList.remove('missing');
    });

    photo.addEventListener('error', tryNext);

    tryNext();
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