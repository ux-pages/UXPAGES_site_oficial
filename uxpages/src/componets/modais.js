document.addEventListener('DOMContentLoaded', () => {
    // Obter todos os cards e modais
    const cards = document.querySelectorAll('.card-fluxograma');
    const modals = document.querySelectorAll('.modal');
    const spans = document.querySelectorAll('.close');

    // Adicionar evento de clique para abrir o modal correspondente
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const modalId = card.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = "block";
            }
        });
    });

    // Adicionar evento de clique para fechar o modal
    spans.forEach(span => {
        span.addEventListener('click', () => {
            span.parentElement.parentElement.style.display = "none";
        });
    });

    // Fechar o modal ao clicar fora dele
    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    });
});
