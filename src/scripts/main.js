(() => {
  const SELECTORS = {
    burger: '.nav__burger',
    mobileMenu: '#mobile-menu',
    mobileLinks: '.mobile-menu__link',
    navLinks: '.nav__link',
    navMenuLinks: '.nav-menu__link',
    footerArrow: '.footer__to-top',
    contactForm: '#contact-form',
    emailInput: '#email',
    messageInput: '#message',
    buyButton: '.nav__buy',
    heroLink: '.hero__link',
    aboutLinks: '.about__link',
    logoLinks: '.nav__logo, .footer__logo',
  };

  const CLASSES = {
    menuOpen: 'mobile-menu--open',
    menuHidden: 'hidden',
    activeLink: 'nav-menu__link--active',
  };

  function initMobileMenu() {
    const burger = document.querySelector(SELECTORS.burger);
    const mobileMenu = document.querySelector(SELECTORS.mobileMenu);

    if (!burger || !mobileMenu) return;

    burger.addEventListener('click', () => {
      const isHidden = mobileMenu.hasAttribute('hidden');
      if (isHidden) {
        mobileMenu.removeAttribute('hidden');
        burger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      } else {
        mobileMenu.setAttribute('hidden', '');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    document.querySelectorAll(SELECTORS.mobileLinks).forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.setAttribute('hidden', '');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !mobileMenu.hasAttribute('hidden')) {
        mobileMenu.setAttribute('hidden', '');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        const href = anchor.getAttribute('href');
        if (href === '#') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  function initFooterToTop() {
    const arrow = document.querySelector(SELECTORS.footerArrow);
    if (!arrow) return;

    arrow.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function initForm() {
    const form = document.querySelector(SELECTORS.contactForm);
    const emailInput = document.querySelector(SELECTORS.emailInput);
    const messageInput = document.querySelector(SELECTORS.messageInput);

    if (!form || !emailInput || !messageInput) return;

    form.addEventListener('submit', e => {
      e.preventDefault();

      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      if (!email || !message) return;

      form.reset();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    emailInput.addEventListener('invalid', e => {
      e.preventDefault();
    });

    messageInput.addEventListener('invalid', e => {
      e.preventDefault();
    });
  }

  function initBuyButton() {
    const buyButton = document.querySelector(SELECTORS.buyButton);
    const formSection = document.querySelector(SELECTORS.contactForm);

    if (!buyButton || !formSection) return;

    buyButton.addEventListener('click', () => {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  function initLogoLinks() {
    document.querySelectorAll(SELECTORS.logoLinks).forEach(link => {
      link.addEventListener('click', e => {
        if (link.getAttribute('href') === '#') {
          e.preventDefault();
          const hero = document.querySelector('#hero');
          if (hero) {
            hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
  }

  function initAboutLinks() {
    document.querySelectorAll(SELECTORS.aboutLinks).forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        window.open('https://crazybaby.com', '_blank', 'noopener,noreferrer');
      });
    });
  }

  function initHoverEffects() {
    const interactiveElements = document.querySelectorAll(
      'a, button, .benefits__icon, .testimonials__quote-mark, .testimonials__ellipse, .features__ellipse, .footer__arrow, .footer__social-link, .footer__logo, .nav__logo, .nav-menu__link'
    );

    interactiveElements.forEach(el => {
      if (!el.style.cursor && getComputedStyle(el).cursor !== 'pointer') {
        el.style.cursor = 'pointer';
      }
    });
  }

  function initNavMenuActive() {
    const navMenuLinks = document.querySelectorAll(SELECTORS.navMenuLinks);
    if (!navMenuLinks.length) return;

    const sections = Array.from(navMenuLinks).map(link => {
      const href = link.getAttribute('href');
      return document.querySelector(href);
    }).filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navMenuLinks.forEach(link => {
            link.classList.toggle(CLASSES.activeLink, link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, {
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    });

    sections.forEach(section => observer.observe(section));
  }

  function init() {
    initMobileMenu();
    initSmoothScroll();
    initFooterToTop();
    initForm();
    initBuyButton();
    initLogoLinks();
    initAboutLinks();
    initHoverEffects();
    initNavMenuActive();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();