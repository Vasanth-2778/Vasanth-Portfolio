const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Toggle on click
menuToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  navLinks.classList.toggle('active');
});

// Close when a nav item is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Close when clicking outside
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});


// Smooth scroll on nav click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

//Skills section
document.addEventListener("DOMContentLoaded", () => {
  const options = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        const el = entry.target;
        const direction = el.getAttribute("data-animate");
        el.classList.add('animate', direction);
        observer.unobserve(el);
      }
    });
  }, options);

  document.querySelectorAll('.skill-card').forEach(card => {
    observer.observe(card);
  });
});

//project section
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const direction = el.getAttribute("data-animate");
        el.classList.add('animate', direction);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll("[data-animate]").forEach(el => {
    observer.observe(el);
  });
});
//Contact section

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll("[data-animate]").forEach(el => {
    observer.observe(el);
  });
});



