document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.carousel-images img');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function showImage(index) {
        // Ocultar todas las imágenes
        images.forEach((img) => {
            img.style.display = 'none';
        });

        // Mostrar la imagen actual
        images[index].style.display = 'block';
        images[index].style.transform = `translateX(-${index * 100}%)`;

        // Actualizar el estado de los puntos
        dots.forEach((dot) => {
            dot.classList.remove('active');
        });
        dots[index].classList.add('active');
    }

    // Mostrar la primera imagen al cargar
    showImage(currentIndex);

    // Cambiar de imagen por punto
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showImage(currentIndex);
        });
    });

    // Cambiar imagen automáticamente
    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    setInterval(changeImage, 3000); // Cambiar cada 3 segundos
});
