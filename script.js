console.log("Portfolio loaded");

const animatedElements = document.querySelectorAll(
  ".expertise-card, .timeline-content, .project-image-card, .project-details, .contact-card, .contact-form"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

animatedElements.forEach(element => {
  element.classList.add("hidden");
  observer.observe(element);
});
