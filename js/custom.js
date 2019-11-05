function openNav() {
  document.querySelector('.main-nav').style.width = '100vw';
}

function closeNav() {
  document.querySelector('.main-nav').style.width = '0%';
}

let windowHeight = screen.height;
let topMenu = document.getElementById('navBg');
let logoBW = document.getElementById('logoBW');
let navBurger = document.getElementById('navBurger');

window.addEventListener('resize', function() {
  windowHeight = screen.height;
});

document.onreadystatechange = function() {
  if (document.readyState === 'complete') {
    console.log(document.readyState);
    document.getElementById('PreLoaderBar').style.display = 'none';
  }
};

(function($) {
  ('use strict');

  $(document).on('ready', function() {
    // -----------------------------
    //  Screenshot Slider
    // -----------------------------
    $('.speaker-slider').slick({
      slidesToShow: 3,
      centerMode: true,
      infinite: true,
      autoplay: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
    // -----------------------------
    //  Count Down JS
    // -----------------------------
    $('.timer').syotimer({
      year: 2020,
      month: 2,
      day: 20,
      hour: 09,
      minute: 00
    });
    // -----------------------------
    // To Top Init
    // -----------------------------
    $('.to-top').click(function() {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
      return false;
    });

    // -----------------------------
    // Magnific Popup
    // -----------------------------
    $('.image-popup').magnificPopup({
      type: 'image',
      removalDelay: 160, //delay removal by X to allow out-animation
      callbacks: {
        beforeOpen: function() {
          // just a hack that adds mfp-anim class to markup
          this.st.image.markup = this.st.image.markup.replace(
            'mfp-figure',
            'mfp-figure mfp-with-anim'
          );
          this.st.mainClass = this.st.el.attr('data-effect');
        }
      },
      closeOnContentClick: true,
      midClick: true,
      fixedContentPos: false,
      fixedBgPos: true
    });
    // -----------------------------
    // Mixitup
    // -----------------------------
    var containerEl = document.querySelector('.gallery-wrapper');
    var mixer;
    if (containerEl) {
      mixer = mixitup(containerEl);
    }
  });
})(jQuery);
