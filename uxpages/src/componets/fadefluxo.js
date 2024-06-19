document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
      threshold: 1 // Executa a animação quando 20% do elemento estiver visível
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Adicionar classes de animação quando o elemento está visível
          entry.target.classList.add('animate__animated', entry.target.dataset.animation);
  
          observer.unobserve(entry.target); // Parar de observar o elemento após a animação ser acionada
        }
      });
    }, observerOptions);
  
    // Selecionar todos os elementos .card-fluxograma que têm classes de animação
    const elementsToAnimate = document.querySelectorAll('.card-fluxograma[data-animation]');
  
    elementsToAnimate.forEach(element => {
      observer.observe(element); // Iniciar a observação para cada elemento
    });
  });
  