document.addEventListener('DOMContentLoaded', function () {
    var recomendado = document.getElementById('recomendado');
    var stopPoint = 800; // ajuste conforme necessário

    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY || window.pageYOffset;

        if (scrollPosition >= stopPoint) {
            recomendado.classList.remove('sticky');
        } else {
            recomendado.classList.add('sticky');
        }
    });
});