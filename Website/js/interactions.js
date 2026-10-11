/**
 * CropGuard Research Portal — Interactive Modules
 * Handles Milestone dropdown selector, Document Archive search/filtering, Contact Form
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', initInteractions);

  function initInteractions() {
    initDocuments();
    initContactForm();
    initScrollReveals();
    initCardInteractions();
  }

  /* ------------------------------------------------------------------------
     1. Milestones Assessment Dropdown
     ------------------------------------------------------------------------ */
  function initMilestones() {
    const selector = document.getElementById('milestone-select');
    if (!selector) return;

    const data = {
      'proposal': {
        title: 'Project Proposal Defense',
        status: 'Completed',
        statusClass: 'completed',
        date: 'To be confirmed',
        marks: 'To be confirmed',
        desc: 'Formal academic defense of the CropGuard research framework. Outlines rural smallholder challenges in Sri Lanka, the offline-first TinyML thesis, member sub-objectives, and baseline feasibility.',
        deliverables: [
          'Approved Topic Assessment Form (TAF-R26-IT-101)',
          'Detailed Research Problem Definition & Scope',
          'Proposal Presentation Slide Deck',
          'Literature Survey & Architecture Specification'
        ]
      },
      'progress1': {
        title: 'Progress Presentation 1',
        status: 'In Progress',
        statusClass: 'in-progress',
        date: 'To be confirmed',
        marks: 'To be confirmed',
        desc: 'First formal milestone tracking baseline model implementation. Demonstration of MobileNetV2 trained across 8 paddy disease classes and Float16 quantization benchmarking.',
        deliverables: [
          'Baseline classification evaluation (97.45% accuracy on seen test split)',
          'Initial Float16 compression benchmark (4.6 MB file size)',
          'Progress Report 1 technical submission',
          'Uncertainty threshold protocol specification (&lt;80% cutoff)'
        ]
      },
      'progress2': {
        title: 'Progress Presentation 2',
        status: 'Planned',
        statusClass: 'planned',
        date: 'To be confirmed',
        marks: 'To be confirmed',
        desc: 'Second progress evaluation examining regional model fine-tuning for Jaffna and Galle, two-role expert portal verification, and trilingual RAG advisory prototyping.',
        deliverables: [
          'Model V4 vs V4.1 domain shift analysis (53.50% unseen field accuracy)',
          'False-healthy error reduction benchmark (95 to 4 cases)',
          'Progress Report 2 technical documentation',
          'Sinhala, Tamil, and English advisory synthesis verification'
        ]
      },
      'final': {
        title: 'Final Assessment & Evaluation',
        status: 'Planned',
        statusClass: 'planned',
        date: 'To be confirmed',
        marks: 'To be confirmed',
        desc: 'Comprehensive final evaluation of the complete end-to-end research framework: edge inference latency (&lt;3s), offline caching resilience, and Sri Lankan agricultural advisory grounding.',
        deliverables: [
          'Final Thesis Dissertation submission (Main Thesis + 4 Member Reports)',
          'Packaged static research portal & demonstration assets',
          'Reproducible model benchmarks and limitations disclosure',
          'Archived code repositories & experimental test runs'
        ]
      },
      'viva': {
        title: 'Viva Voce (Oral Defense)',
        status: 'Planned',
        statusClass: 'planned',
        date: 'To be confirmed',
        marks: 'To be confirmed',
        desc: 'Individual oral defense before the Faculty of Computing examination board. Technical examination of individual member contributions across TinyML, Active Learning, AutoML, and RAG.',
        deliverables: [
          'Individual member contribution defense',
          'Technical Q&A on model compression & edge pipelines',
          'Discussion of research limitations & field deployment readiness',
          'Live project prototype inspection'
        ]
      },
      'other': {
        title: 'Other Continuous Assessments',
        status: 'In Progress',
        statusClass: 'in-progress',
        date: 'To be confirmed',
        marks: 'To be confirmed',
        desc: 'Periodic supervisor review consultations, research logbook sign-offs, code reviews, and website milestone assessments throughout the final year research curriculum.',
        deliverables: [
          'Bi-weekly supervisor consultation records',
          'Research logbook and milestone checklists',
          'Static academic website maintained under 20 MB asset limit',
          'Ethical clearance and data integrity verification'
        ]
      }
    };

    function updateCard(key) {
      const item = data[key];
      if (!item) return;

      const titleEl = document.getElementById('ms-title');
      const descEl = document.getElementById('ms-desc');
      const statusEl = document.getElementById('ms-status-pill');
      const dateEl = document.getElementById('ms-date-val');
      const marksEl = document.getElementById('ms-marks-val');
      const listEl = document.getElementById('ms-checklist');

      if (titleEl) titleEl.textContent = item.title;
      if (descEl) descEl.textContent = item.desc;
      if (dateEl) dateEl.textContent = item.date;
      if (marksEl) marksEl.textContent = item.marks;

      if (statusEl) {
        statusEl.textContent = item.status;
        statusEl.className = `ms-status-badge ${item.statusClass}`;
      }

      if (listEl) {
        listEl.innerHTML = '';
        item.deliverables.forEach(deliv => {
          const li = document.createElement('li');
          li.innerHTML = deliv;
          listEl.appendChild(li);
        });
      }
    }

    selector.addEventListener('change', function () {
      updateCard(this.value);
    });

    updateCard('proposal');
  }

  /* ------------------------------------------------------------------------
     2. Documents Archive Search & Filter
     ------------------------------------------------------------------------ */
  function initDocuments() {
    const searchInput = document.getElementById('doc-search');
    const filterBtns = document.querySelectorAll('.filter-pill-btn');
    const cards = document.querySelectorAll('.doc-clean-card');

    let currentCategory = 'all';
    let currentQuery = '';

    function applyFilter() {
      cards.forEach(card => {
        const cat = card.getAttribute('data-category') || '';
        const title = (card.querySelector('h3')?.textContent || '').toLowerCase();
        const desc = (card.querySelector('p')?.textContent || '').toLowerCase();

        const matchesCat = (currentCategory === 'all') || (cat === currentCategory);
        const matchesQuery = currentQuery === '' || title.includes(currentQuery) || desc.includes(currentQuery);

        if (matchesCat && matchesQuery) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }

    if (searchInput) {
      searchInput.addEventListener('input', function () {
        currentQuery = this.value.trim().toLowerCase();
        applyFilter();
      });
    }

    filterBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentCategory = this.getAttribute('data-filter') || 'all';
        applyFilter();
      });
    });
  }

  /* ------------------------------------------------------------------------
     3. Contact Form Validation & Mailto Action
     ------------------------------------------------------------------------ */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    const banner = document.getElementById('contact-banner');

    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const subjectInput = document.getElementById('contact-subject');
      const msgInput = document.getElementById('contact-msg');

      let valid = true;

      if (!nameInput.value.trim()) {
        nameInput.classList.add('is-invalid');
        valid = false;
      } else {
        nameInput.classList.remove('is-invalid');
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add('is-invalid');
        valid = false;
      } else {
        emailInput.classList.remove('is-invalid');
      }

      if (!subjectInput.value.trim()) {
        subjectInput.classList.add('is-invalid');
        valid = false;
      } else {
        subjectInput.classList.remove('is-invalid');
      }

      if (!msgInput.value.trim()) {
        msgInput.classList.add('is-invalid');
        valid = false;
      } else {
        msgInput.classList.remove('is-invalid');
      }

      if (!valid) {
        if (banner) {
          banner.className = 'contact-banner error';
          banner.textContent = 'Please complete all required fields correctly.';
        }
        return;
      }

      const recipient = 'it22065094@my.sliit.lk';
      const subject = encodeURIComponent('[CropGuard Research] ' + subjectInput.value.trim());
      const body = encodeURIComponent(
        `From: ${nameInput.value.trim()} (${emailInput.value.trim()})\n\n${msgInput.value.trim()}`
      );
      const mailto = `mailto:${recipient}?subject=${subject}&body=${body}`;

      if (banner) {
        banner.className = 'contact-banner success';
        banner.innerHTML = `<strong>Enquiry ready!</strong> Opening your email client to send to the research team (<a href="mailto:${recipient}">${recipient}</a>).`;
      }

      window.location.href = mailto;
      form.reset();
    });
  }

  /* ------------------------------------------------------------------------
     4. Smooth Scroll Reveal
     ------------------------------------------------------------------------ */
  function initScrollReveals() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    // If user prefers reduced motion, reveal everything immediately
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealElements.forEach(el => el.classList.add('is-visible'));
      return;
    }

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  }

  function initCardInteractions() {
    const interactiveCards = document.querySelectorAll(
      '.module-card, .point-card, .obj-item-card, .result-card-huge, .pres-clean-card, .team-member-clean-card'
    );

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    interactiveCards.forEach(card => {
      card.addEventListener('pointermove', event => {
        const bounds = card.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width;
        const y = (event.clientY - bounds.top) / bounds.height;
        const rotateX = (0.5 - y) * 2.4;
        const rotateY = (x - 0.5) * 2.4;

        card.style.setProperty('--card-rotate-x', `${rotateX}deg`);
        card.style.setProperty('--card-rotate-y', `${rotateY}deg`);
        card.classList.add('is-tilting');
      });

      card.addEventListener('pointerleave', () => {
        card.classList.remove('is-tilting');
        card.style.removeProperty('--card-rotate-x');
        card.style.removeProperty('--card-rotate-y');
      });
    });
  }
})();
