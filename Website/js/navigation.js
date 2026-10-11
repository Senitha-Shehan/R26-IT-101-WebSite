/**
 * CropGuard Research Portal — Navigation & Scroll Interactions
 * Sticky header transition, active section scroll spy, mobile drawer, smooth scroll
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', initNav);

  function initNav() {
    const header = document.querySelector('.site-header');
    const progressBar = createScrollProgress();
    const navLinks = document.querySelectorAll('.nav-link[href^="#"], .mobile-nav-link[href^="#"]');
    const navToggle = document.querySelector('.nav-toggle');
    const mobileDrawer = document.querySelector('.mobile-drawer');
    const drawerBackdrop = document.querySelector('.mobile-drawer-backdrop');
    const backToTopBtn = document.querySelector('.back-to-top-floating');
    const footerBackToTop = document.querySelector('.back-to-top-clean');

    // Section targets for scroll spy
    const sectionIds = ['home', 'domain', 'results', 'documents', 'presentations', 'about', 'contact'];
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter(sec => sec !== null);

    // Scroll handler
    function onScroll() {
      const scrollY = window.scrollY;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (progressBar) {
        progressBar.style.transform = `scaleX(${scrollableHeight > 0 ? scrollY / scrollableHeight : 0})`;
      }

      if (header) {
        if (scrollY > 30) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }

      if (backToTopBtn) {
        if (scrollY > 400) {
          backToTopBtn.classList.add('visible');
        } else {
          backToTopBtn.classList.remove('visible');
        }
      }

      // Scroll Spy
      const headerOffset = 100;
      let currentSectionId = '';

      sections.forEach(section => {
        const top = section.offsetTop - headerOffset;
        const height = section.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
          currentSectionId = section.getAttribute('id');
        }
      });

      if (window.innerHeight + scrollY >= document.body.offsetHeight - 90) {
        currentSectionId = 'contact';
      }

      navLinks.forEach(link => {
        const href = link.getAttribute('href').replace('#', '');
        // Special case: "results" belongs to domain context
        const isMatched = (href === currentSectionId) || (href === 'domain' && currentSectionId === 'results');
        if (isMatched) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '') return;

        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          closeDrawer();

          const headerOffset = 76;
          const elementPos = targetEl.getBoundingClientRect().top;
          const offsetPos = elementPos + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPos,
            behavior: 'smooth'
          });

          targetEl.setAttribute('tabindex', '-1');
          targetEl.focus({ preventScroll: true });
        }
      });
    });

    // Mobile Drawer
    function openDrawer() {
      if (!mobileDrawer) return;
      mobileDrawer.classList.add('open');
      if (drawerBackdrop) drawerBackdrop.classList.add('active');
      navToggle?.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      if (!mobileDrawer) return;
      mobileDrawer.classList.remove('open');
      if (drawerBackdrop) drawerBackdrop.classList.remove('active');
      navToggle?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    if (navToggle) {
      navToggle.addEventListener('click', () => {
        if (mobileDrawer.classList.contains('open')) {
          closeDrawer();
        } else {
          openDrawer();
        }
      });
    }

    if (drawerBackdrop) {
      drawerBackdrop.addEventListener('click', closeDrawer);
    }

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileDrawer?.classList.contains('open')) {
        closeDrawer();
      }
    });

    // Back to Top
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (backToTopBtn) backToTopBtn.addEventListener('click', scrollToTop);
    if (footerBackToTop) footerBackToTop.addEventListener('click', scrollToTop);
  }

  function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress-bar';
    progressBar.setAttribute('aria-hidden', 'true');
    document.body.appendChild(progressBar);
    return progressBar;
  }
})();
