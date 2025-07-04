document.addEventListener('DOMContentLoaded', function() {

  const signupBtn = document.querySelector('.signup-btn');
  if (signupBtn) {
    signupBtn.addEventListener('click', function(event) {
      event.preventDefault();
      signupBtn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        signupBtn.style.transform = 'scale(1)';
        alert('You clicked Sign Up!');
      }, 100);
    });
  }


  const images = document.querySelectorAll('#img11');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  images.forEach((img) => observer.observe(img));

  
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      link.style.transition = 'color 0.3s ease';
    });
    link.addEventListener('mouseleave', () => {
      link.style.transition = 'color 0.3s ease';
    });
  });
});