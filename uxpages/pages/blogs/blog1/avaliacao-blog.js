document.addEventListener('DOMContentLoaded', function () {
    const ratingInputs = document.querySelectorAll('.rating input');
    const submitButton = document.getElementById('submit-rating');

    ratingInputs.forEach(input => {
        input.addEventListener('change', function () {
            const selectedRating = this.value;

            ratingInputs.forEach(input => {
                const label = input.nextElementSibling;
                if (input.value <= selectedRating) {
                    label.style.color = 'gold';
                } else {
                    label.style.color = '#ccc';
                }
            });
        });
    });

    submitButton.addEventListener('click', function () {
        const selectedRating = document.querySelector('.rating input:checked');
        if (selectedRating) {
            alert('Obrigado por nos avaliar');
        } else {
            alert('Por favor, selecione uma avaliação.');
        }
    });
});
