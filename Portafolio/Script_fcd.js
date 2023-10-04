const flipButtons = document.querySelectorAll('.flip-button');

flipButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const cardContent = button.parentElement.parentElement;
        cardContent.style.transform = cardContent.style.transform === 'rotateY(180deg)' ? '' : 'rotateY(180deg)';
    });
});