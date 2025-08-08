const ourStorySection = document.getElementById('our-story');
const aboutUsSection = document.getElementById('about-us');
const featuresSection = document.getElementById('features');
const getInTouchSection = document.getElementById('get-in-touch');

const sections = [ourStorySection, aboutUsSection, featuresSection, getInTouchSection].filter(Boolean);
const navLinks = document.querySelectorAll('.nav__link');

let activeSectionId = null;

const visibleEntries = new Map();

const updateNavigation = activeLink => {
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href.includes(activeLink.trim())) {
      link.classList.add('nav__link--active');
    } else {
      link.classList.remove('nav__link--active');
    }
  });
}

export const initNavigationObserver = () => {
  updateNavigation(ourStorySection.id);

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        visibleEntries.set(entry.target.id, entry);
      } else {
        visibleEntries.delete(entry.target.id);
      }
    });

    let currentActiveSectionId = null;
    let maxVisibleRatio = 0;

    visibleEntries.forEach(entry => {
      if (entry.intersectionRatio > maxVisibleRatio) {
        maxVisibleRatio = entry.intersectionRatio;
        currentActiveSectionId = entry.target.id;
      }
    });

    if (currentActiveSectionId === null || window.scrollY < 100) {
      currentActiveSectionId = ourStorySection.id;
    }

    if (currentActiveSectionId !== activeSectionId) {
      activeSectionId = currentActiveSectionId;
      updateNavigation(activeSectionId);
    }

  }, observerOptions);

  sections.forEach(section => {
    if (section) {
      observer.observe(section);
    }
  });
}
