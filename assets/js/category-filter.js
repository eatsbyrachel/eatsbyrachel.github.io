document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.recipe-card');

  buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var category = this.getAttribute('data-category');

      buttons.forEach(function(b) { b.classList.remove('active'); });
      this.classList.add('active');

      cards.forEach(function(card) {
        if (category === 'all' || card.getAttribute('data-categories').indexOf(category) !== -1) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
