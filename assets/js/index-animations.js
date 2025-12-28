/**
 * Index Page Animations and Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initializeAnimations();
  setupScrollReveal();
  setupSkillsAnimation();
  setupPortfolioHover();
  setupCountersAnimation();
});

/**
 * Initialize all animations
 */
function initializeAnimations() {
  // Fade in on page load
  document.querySelectorAll('.fade-in-on-load').forEach((el, index) => {
    el.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1}s both`;
  });

  // Start parallax effect if supported
  if (window.innerWidth > 768) {
    setupParallax();
  }
}

/**
 * Parallax scroll effect
 */
function setupParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  if (parallaxElements.length === 0) return;

  window.addEventListener('scroll', () => {
    parallaxElements.forEach(el => {
      const speed = el.getAttribute('data-parallax') || 0.5;
      const yPos = window.scrollY * speed;
      el.style.transform = `translateY(${yPos}px)`;
    });
  });
}

/**
 * Reveal elements on scroll
 */
function setupScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  revealElements.forEach(el => observer.observe(el));
}

/**
 * Animate skills bars on scroll
 */
function setupSkillsAnimation() {
  const skillsSection = document.getElementById('skills-section');
  if (!skillsSection) return;

  const skillBars = document.querySelectorAll('.skill-progress-bar');
  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        animateSkills(skillBars);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  if (skillsSection) {
    observer.observe(skillsSection);
  }
}

/**
 * Animate individual skill bars
 */
function animateSkills(skillBars) {
  skillBars.forEach((bar, index) => {
    setTimeout(() => {
      const width = bar.getAttribute('data-skill-level') || '80';
      bar.style.width = width + '%';
      bar.classList.add('animated');
    }, index * 100);
  });
}

/**
 * Portfolio item hover effects
 */
function setupPortfolioHover() {
  const portfolioItems = document.querySelectorAll('.portfolio-item-card');

  portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
      this.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
    });

    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
  });
}

/**
 * Animate counters
 */
function setupCountersAnimation() {
  const counters = document.querySelectorAll('.counter-number');
  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target')) || 0;
          animateCounter(counter, target);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const countersSection = document.getElementById('about-section');
  if (countersSection) {
    observer.observe(countersSection);
  }
}

/**
 * Animate counter from 0 to target
 */
function animateCounter(element, target) {
  let current = 0;
  const increment = target / 50;
  const duration = 2000;
  const step = duration / 50;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + '+';
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, step);
}

/**
 * Smooth scroll to section
 */
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/**
 * Add animation classes on load
 */
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal-on-scroll');

  reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const elementTop = reveal.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add('revealed');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

// Initialize reveal on load
revealOnScroll();
