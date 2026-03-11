const runWhenReady = (callback) => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback, { once: true });
  } else {
    callback();
  }
};

const initLayout = () => {
  const $ = window.jQuery;
  const WOW = window.WOW;

  if (!$ || !WOW) return;

  new WOW().init();

  $(window).scroll(function () {
    const isAtTop = $(this).scrollTop() <= 50;
    $('.back-to-top')[isAtTop ? 'fadeOut' : 'fadeIn']('slow');
  });

  $('.back-to-top').click(function () {
    $('html').animate({ scrollTop: 0 }, 1000, 'easeOutBounce');
    return false;
  });

  const setNavContainerScrolledToTop = () => {
    $('.navcontainer').toggleClass('navcontainer-scrolledtotop', $('html').scrollTop() === 0);
  };

  $(window).scroll(setNavContainerScrolledToTop);
  $(document).ready(setNavContainerScrolledToTop);

  const baseTitle = window.document.title;
  const updateState = (hash) => {
    if (!hash) return;
    window.history.replaceState({}, '', hash);
    const title = $(`.navbar a.nav-item[href="${hash}"]`).text();
    window.document.title = title ? `${title} | ${baseTitle}` : baseTitle;
  };

  const scrollTo = (element) => {
    const offset = $(element).offset();
    if (!offset) return;
    const scrollTop = Math.max(offset.top, 0);
    $('html').animate({ scrollTop }, 1000, 'easeOutCubic');
  };

  let hash = window.location.hash;
  if ($(`.navbar a.nav-item[href="${hash}"]`).length === 0) {
    hash = $('.navbar a.nav-item[href]').attr('href');
  }

  $(document).ready(function () {
    updateState(hash);
    scrollTo(hash);
  });

  $('body').scrollspy({
    spy: 'scroll',
    target: '.navbar',
    offset: 100,
  });

  $(window).on('activate.bs.scrollspy', function () {
    updateState($('.navbar a.nav-item.active').attr('href'));
  });

  $('.navbar .navbar-nav a').on('click', function (event) {
    event.preventDefault();
    scrollTo(this.hash);
    $('.navbar .navbar-collapse').collapse('hide');
  });
};

const initTypedText = () => {
  const $ = window.jQuery;
  const Typed = window.Typed;

  if (!$ || !Typed) return;

  $('.block-typed-text-widget').each(function () {
    const element = this;
    $(element).empty();
    const $child = $(`<${element.dataset.widgetTag || 'h2'} style="display: inline-block" />`);
    $child.appendTo(element);

    void new Typed($child.get(0), {
      strings: (element.dataset.widgetText || '').split(','),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true,
    });

    const $cursor = $(element).find('.typed-cursor');
    const updateCursorStyles = () => {
      for (const prop of ['display', 'font-size', 'line-height', 'margin-top', 'margin-bottom']) {
        $cursor.css(prop, $child.css(prop));
      }
    };

    updateCursorStyles();
    $(window).resize(updateCursorStyles);
  });
};

const initSkillBars = () => {
  const $ = window.jQuery;

  if (!$ || !$.fn.waypoint) return;

  $('.block-percentages-widget').each(function () {
    const element = this;
    $(element).waypoint(
      function () {
        $(element)
          .find('.progress-bar')
          .each(function () {
            $(this).css('width', `${$(this).attr('aria-valuenow')}%`);
          });
      },
      { offset: '80%' },
    );
  });
};

const initHeroTilt = () => {
  const $ = window.jQuery;

  if (!$ || !$.fn.tilt) return;
  $('.section-hero-widget').find('.hero-image img').tilt();
};

runWhenReady(() => {
  initLayout();
  initTypedText();
  initSkillBars();
  initHeroTilt();
});
