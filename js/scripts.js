$(function () {
  /* activate scrollspy menu */
  $('body').scrollspy({
    target: '#navbar-collapsible',
    offset: 52
  });


  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scroll-up').fadeIn();
    } else {
      $('.scroll-up').fadeOut();
    }

  });


  /* smooth scrolling sections */
  $('.smoothScroll').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 800);


        // activte animations in this section
        target.find('.animate').delay(1200).addClass("animated");
        setTimeout(function () {
          target.find('.animated').removeClass("animated");
        }, 2000);

        return false;
      }
    }
  });
  window.sr = ScrollReveal({ reset: true });
  sr.reveal('.box', { duration: 200 });
  sr.reveal('.banner', { duration: 200 });
  sr.reveal('.sectionbanner', { duration: 200 });

  sr.reveal('.galdiv',{duration:200});
});