function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to add fade-in class when in view
  function checkFadeIn() {
    const elements = document.querySelectorAll('.card-clients');
    elements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add('fade-in');
      }
    });
  }

  // Listen for scroll events
  window.addEventListener('scroll', checkFadeIn);
  
  // Check on initial load
  window.addEventListener('load', checkFadeIn);