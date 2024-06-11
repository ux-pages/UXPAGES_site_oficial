// script.js

// Função para abrir o pop-up
function openPopup(popupId) {
    document.getElementById(popupId).style.display = "block";
}

// Função para fechar o pop-up
function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}

// Fecha o pop-up se o usuário clicar fora dele
window.onclick = function(event) {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
}

// Adiciona um efeito de rolagem suave ao mouse entrar e sair do elemento
document.querySelector('.elemento-com-scroll').addEventListener('mouseenter', function() {
    this.querySelector('img').style.transform = 'translateY(-550px)'; // Ajuste conforme necessário
});

document.querySelector('.elemento-com-scroll').addEventListener('mouseleave', function() {
    this.querySelector('img').style.transform = 'translateY(0)'; // Ajuste conforme necessário
});

document.querySelector('.elemento-com-scroll2').addEventListener('mouseenter', function() {
    this.querySelector('img').style.transform = 'translateY(-550px)'; // Ajuste conforme necessário
});

document.querySelector('.elemento-com-scroll2').addEventListener('mouseleave', function() {
    this.querySelector('img').style.transform = 'translateY(0)'; // Ajuste conforme necessário
});
