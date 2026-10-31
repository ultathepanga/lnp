// LaunchPad interactions — no framework or backend required.
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const year = document.getElementById('year');
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  // Keep the copyright year current.
  year.textContent = new Date().getFullYear();

  // Accessible mobile navigation.
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  // Close the mobile menu after selecting a section.
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
    });
  });

  // CTA gives immediate feedback and guides visitors to the contact form.
  document.querySelectorAll('#primary-cta, .nav-cta').forEach((cta) => {
    cta.addEventListener('click', () => {
      cta.classList.add('cta-activated');
      window.setTimeout(() => cta.classList.remove('cta-activated'), 650);
    });
  });

  const fields = {
    name: {
      input: document.getElementById('name'),
      error: document.getElementById('name-error'),
      validate: value => value.trim().length >= 2 ? '' : 'Please enter at least 2 characters.'
    },
    email: {
      input: document.getElementById('email'),
      error: document.getElementById('email-error'),
      validate: value => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim()) ? '' : 'Please enter a valid email address.'
    },
    message: {
      input: document.getElementById('message'),
      error: document.getElementById('message-error'),
      validate: value => value.trim().length >= 10 ? '' : 'Please write at least 10 characters.'
    }
  };

  function validateField(field) {
    const message = field.validate(field.input.value);
    field.error.textContent = message;
    field.input.classList.toggle('invalid', Boolean(message));
    field.input.setAttribute('aria-invalid', String(Boolean(message)));
    return !message;
  }

  Object.values(fields).forEach((field) => {
    field.input.addEventListener('blur', () => validateField(field));
    field.input.addEventListener('input', () => {
      if (field.input.classList.contains('invalid')) validateField(field);
      feedback.textContent = '';
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const isValid = Object.values(fields).map(validateField).every(Boolean);

    if (!isValid) {
      feedback.textContent = 'Please check the highlighted fields and try again.';
      feedback.style.color = '#ff9a9a';
      const firstInvalid = form.querySelector('.invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    feedback.textContent = 'Thanks! Your message is ready. This demo does not send data to a server.';
    feedback.style.color = '#75e5c3';
    form.reset();
    Object.values(fields).forEach((field) => {
      field.input.classList.remove('invalid');
      field.input.removeAttribute('aria-invalid');
      field.error.textContent = '';
    });
  });

  // Smooth scrolling fallback for browsers that don't honor CSS scroll behavior.
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    });
  });
});
