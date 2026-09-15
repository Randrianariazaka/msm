/* Mada Stream Media — interactions du site */
(function () {
  // Menu mobile
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    });
  }

  // Année courante dans le pied de page
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Formulaire de contact (démo statique : à remplacer par Contact Form 7 / WPForms)
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.getElementById('form-status');
      status.textContent = 'Message prêt à être envoyé. Branchez ce formulaire à votre plugin WordPress pour le mettre en service.';
      status.style.color = '#0B6DB3';
    });
  }
})();
