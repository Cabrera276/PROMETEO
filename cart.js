document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalAmount = document.querySelector('.total-amount');
    const payButton = document.getElementById('pay-button');
    const cart = [];

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <span>${item.name}</span>
                <span>Bs ${item.price}</span>
                <button class="delete-item" data-index="${index}" style="background: none; border: none; color: red; cursor: pointer;">
                    🗑️
                </button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        // Evento para eliminar item
        const deleteButtons = document.querySelectorAll('.delete-item');
        deleteButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.getAttribute('data-index'));
                cart.splice(index, 1);
                updateCart();
            });
        });

        const total = cart.reduce((sum, item) => sum + item.price, 0);
        totalAmount.textContent = `Bs ${total}`;
    }

    function addToCart(name, price) {
        cart.push({ name, price });
        updateCart();
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));
            addToCart(name, price);
        });
    });

    // Paso importante: función de crear el mensaje para WhatsApp
    function createWhatsAppMessage() {
        if (cart.length === 0) {
            return "No hay productos en el pedido.";
        }

        let message = "📦 *Pedido Alquimia:*\n";
        cart.forEach((item, i) => {
            message += `${i + 1}. ${item.name} - Bs ${item.price}\n`;
        });
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        message += `\n💰 *Total:* Bs ${total}`;
        return encodeURIComponent(message);
    }

    // ENLACE CORRECTO PARA WHATSAPP
    const whatsappNumber = "59171234567"; // Reemplázalo con tu número real

    payButton.addEventListener('click', () => {
        if (cart.length === 0) {
            alert("El carrito está vacío. Agrega productos antes de pagar.");
            return;
        }

        alert("✅ Su pedido está en proceso");

        const message = createWhatsAppMessage();
        const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
  payButton.disabled = true; // Desactiva el botón después de hacer clic
      window.open(whatsappURL, '_blank');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalAmount = document.querySelector('.total-amount');
    const payButton = document.querySelector('.checkout-btn');
    const cart = [];

    // Actualizar carrito
    function updateCart() {
        cartItemsContainer.innerHTML = '';

        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `
                <span>${item.name}</span>
                <span>Bs ${item.price}</span>
                <button class="remove-btn" data-index="${index}" title="Eliminar">
                    <i class="fas fa-trash-alt"></i>
                </button>
            `;

            cartItemsContainer.appendChild(cartItem);
            cartItem.classList.add('slide-in');
        });

        // Botones eliminar
        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = e.target.closest('.remove-btn').getAttribute('data-index');
                removeItem(index);
            });
        });

        const total = cart.reduce((sum, item) => sum + item.price, 0);
        totalAmount.textContent = `Bs ${total}`;
    }

    function addToCart(name, price) {
        cart.push({ name, price });
        updateCart();
    }

    function removeItem(index) {
        const item = document.querySelectorAll('.cart-item')[index];
        item.classList.add('slide-out');

        setTimeout(() => {
            cart.splice(index, 1);
            updateCart();
        }, 300);
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));
            addToCart(name, price);
        });
    });

    // ✳️ FUNCION PARA CREAR EL MENSAJE CON DATOS PERSONALES
    function createWhatsAppMessage(clientName, address) {
        if (cart.length === 0) return "No hay productos en el pedido.";

        let message = `Hola, mi nombre es *${clientName}* y vivo en *${address}*.\nQuiero hacer el siguiente pedido:\n\n`;
        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.name} - Bs ${item.price}\n`;
        });

        const total = cart.reduce((sum, item) => sum + item.price, 0);
        message += `\n*Total: Bs ${total}*`;

        return encodeURIComponent(message);
    }

    // NÚMERO DE WHATSAPP
    const whatsappNumber = "591XXXXXXXX"; // Reemplaza con tu número real

    payButton.addEventListener('click', () => {
        if (cart.length === 0) {
            alert("El carrito está vacío. Agrega productos antes de pagar.");
            return;
        }

        // Pedir nombre y dirección
        const clientName = prompt("Por favor, ingrese su nombre:");
        if (!clientName) return alert("Debe ingresar su nombre para continuar.");

        const address = prompt("Ingrese su dirección o zona:");
        if (!address) return alert("Debe ingresar su dirección para continuar.");

        alert("Su pedido está en proceso...");

        const message = createWhatsAppMessage(clientName, address);
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
        window.open(whatsappURL, '_blank');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Variables para almacenar los productos y el total
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalAmount = document.querySelector('.total-amount');
    const cart = []; // Carrito de productos

    // Función para actualizar el carrito
    function updateCart() {
        // Limpiar el contenedor de productos en el carrito
        cartItemsContainer.innerHTML = '';

        // Recorrer los productos del carrito
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <span>${item.name}</span>
                <span>Bs ${item.price}</span>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        // Calcular el total
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        totalAmount.textContent = `Bs ${total}`;
    }

    // Función para agregar productos al carrito
    function addToCart(productName, productPrice) {
        // Agregar el producto al carrito
        cart.push({ name: productName, price: productPrice });
        updateCart(); // Actualizar el carrito y el total
    }

    // Event listener para los botones "Agregar al carrito"
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-name');
            const productPrice = parseFloat(button.getAttribute('data-price'));
            addToCart(productName, productPrice); // Agregar producto al carrito
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalAmount = document.querySelector('.total-amount');
    const payButton = document.querySelector('.checkout-btn'); // Botón pagar
    const whatsappNumber = "591XXXXXXXX"; // Cambia por tu número

    const cart = [];

    function updateCart() {
        cartItemsContainer.innerHTML = '';

        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `
                <span>${item.name}</span>
                <span>Bs ${item.price}</span>
                <button class="remove-btn" data-index="${index}">Eliminar</button>
            `;

            cartItemsContainer.appendChild(cartItem);
        });

        const total = cart.reduce((sum, item) => sum + item.price, 0);
        totalAmount.textContent = `Bs ${total}`;

        // Añadir event listeners a botones eliminar
        const removeButtons = document.querySelectorAll('.remove-btn');
        removeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const index = parseInt(button.getAttribute('data-index'));
                cart.splice(index, 1); // Quitar producto del carrito
                updateCart(); // Actualizar carrito y total
            });
        });
    }

    function addToCart(productName, productPrice) {
        cart.push({ name: productName, price: productPrice });
        updateCart();
    }

    function createWhatsAppMessage() {
        if (cart.length === 0) {
            return "No hay productos en el pedido.";
        }
        let message = "Pedido:\n";
        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.name} - Bs ${item.price}\n`;
        });
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        message += `Total: Bs ${total}`;
        return encodeURIComponent(message);
    }

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-name');
            const productPrice = parseFloat(button.getAttribute('data-price'));
            addToCart(productName, productPrice);
        });
    });

    payButton.addEventListener('click', () => {
        if (cart.length === 0) {
            alert("El carrito está vacío. Agrega productos antes de pagar.");
            return;
        }
        alert("Su pedido está en proceso");

        const message = createWhatsAppMessage();
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
        window.open(whatsappURL, '_blank');
    });
});



