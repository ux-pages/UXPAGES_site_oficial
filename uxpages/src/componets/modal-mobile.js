document.querySelectorAll('.card-fluxograma1').forEach(card => {
    card.addEventListener('click', () => {
        const modalId = 'modal-' + card.id;
        document.getElementById(modalId).style.display = 'block';
    });
});

// Função para fechar modais
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        closeBtn.parentElement.parentElement.style.display = 'none';
    });
});

// Fechar modal clicando fora do conteúdo
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
}