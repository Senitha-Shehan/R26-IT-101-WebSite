/**
 * CropGuard Research Website — Master Entry Script
 * Academic project initialization, accessibility attributes, and image fallbacks
 */

(function () {
  'use strict';

  console.info(
    '%c CropGuard Research Portal %c SLIIT Faculty of Computing · Project R26-IT-101 ',
    'background: #183E2A; color: #E8F0DF; font-weight: bold; padding: 4px 8px; border-radius: 3px 0 0 3px;',
    'background: #2E7046; color: #FFFFFF; font-weight: bold; padding: 4px 8px; border-radius: 0 3px 3px 0;'
  );

  document.addEventListener('DOMContentLoaded', () => {
    // Add current year to footer copyright if needed
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    // Lazy load images with native support or fallback
    if ('loading' in HTMLImageElement.prototype) {
      const images = document.querySelectorAll('img[loading="lazy"]');
      images.forEach(img => {
        if (img.dataset.src) {
          img.src = img.dataset.src;
        }
      });
    }
  });
})();
