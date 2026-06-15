(function () {
  function init() {
    var marquee = document.getElementById('testimonialsMarquee');
    var dotsContainer = document.getElementById('testimonialDots');
    if (!marquee || !dotsContainer) return;

    // Only activate on mobile
    if (window.innerWidth > 640) return;

    var cards = Array.from(marquee.querySelectorAll('.testimonial-card:not([aria-hidden="true"])'));
    if (cards.length === 0) return;

    // Build dots
    cards.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.className = 'testimonials__dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Review ' + (i + 1));
      dot.addEventListener('click', function () {
        cards[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      });
      dotsContainer.appendChild(dot);
    });

    var dots = dotsContainer.querySelectorAll('.testimonials__dot');

    // Update active dot based on scroll position
    var scrollTimer;
    marquee.addEventListener('scroll', function () {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(function () {
        var center = marquee.scrollLeft + marquee.offsetWidth / 2;
        var closest = 0;
        var minDist = Infinity;
        cards.forEach(function (card, i) {
          var cardCenter = card.offsetLeft + card.offsetWidth / 2;
          var dist = Math.abs(center - cardCenter);
          if (dist < minDist) { minDist = dist; closest = i; }
        });
        dots.forEach(function (d) { d.classList.remove('active'); });
        dots[closest].classList.add('active');
      }, 50);
    }, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
