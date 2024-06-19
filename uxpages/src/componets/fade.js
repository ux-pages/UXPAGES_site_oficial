document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card-blogs');
    let delay = 0; // Tempo inicial de atraso

    const observerOptions = {
      threshold: 0.1 // Executa a animação quando 10% do elemento estiver visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('show');
          }, delay);
          delay += 300; // 300ms de intervalo entre cada card
          observer.unobserve(entry.target); // Não observar mais o elemento após a animação
        }
      });
    }, observerOptions);

    cards.forEach(card => {
      observer.observe(card); // Inicia a observação de cada card
    });
  });



  document.addEventListener("DOMContentLoaded", function() {
    const cards2 = document.querySelectorAll('.card-neg');
    let delay2 = 0; // Tempo inicial de atraso

    const observerOptions = {
      threshold: 0.1 // Executa a animação quando 10% do elemento estiver visível
    };

    const observer2 = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('show');
          }, delay2);
          delay2 += 300; // 300ms de intervalo entre cada card
          observer.unobserve(entry.target); // Não observar mais o elemento após a animação
        }
      });
    }, observerOptions);

    cards2.forEach(card => {
      observer2.observe(card); // Inicia a observação de cada card
    });
  });
