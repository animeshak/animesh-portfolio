
window.addEventListener('DOMContentLoaded', function() {
  var contactButton = document.querySelector('.contact');

  contactButton.addEventListener('click', function() {
    var imageFour = document.querySelector('.image-four');
    imageFour.scrollIntoView({ behavior: 'smooth' });
  });
});
