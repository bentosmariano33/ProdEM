// Obtener el botón de flecha
const scrollToTopButton = document.getElementById('scroll-to-top');

// Mostrar el botón cuando se hace scroll hacia abajo
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Hacer scroll hacia arriba cuando se hace clic en el botón
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
});
