<script>
    const carousel = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    let currentIndex = 0;

    function updateCarousel() {
        const width = slides[currentIndex].clientWidth;
        carousel.style.transform = `translateX(-${currentIndex * width}px)`;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length; // Cicla al principio
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Cicla al final
        updateCarousel();
    });

    // Ajustar el carrusel al redimensionar la ventana
    window.addEventListener('resize', updateCarousel);
</script>
