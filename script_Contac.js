document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar que se envíe el formulario normalmente

    // Capturar los valores del formulario
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Número de WhatsApp con código país (sin + ni espacios)
    const whatsappNumber = "59162726341"; // Cambia esto por tu número real

    // Crear el texto del mensaje para WhatsApp
    let whatsappMessage = `Nuevo mensaje de contacto:\n\n`;
    whatsappMessage += `Nombre: ${name}\n`;
    whatsappMessage += `Email: ${email}\n`;
    whatsappMessage += `Teléfono: ${phone}\n`;
    whatsappMessage += `Asunto: ${subject}\n`;
    whatsappMessage += `Mensaje: ${message}`;

    // Codificar mensaje para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Crear la URL para enviar a WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappURL, '_blank');
});
