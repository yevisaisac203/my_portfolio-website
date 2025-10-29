
const fadeElements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
      el.style.transition = "all 1s ease";
    }
  });
});


const links = document.querySelectorAll('nav a');
links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.textShadow = "0 0 15px #00bfff";
  });
  link.addEventListener('mouseleave', () => {
    link.style.textShadow = "none";
  });
});
