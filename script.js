// Función para manejar la opción "Sí"
function aceptarMayorEdad() {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
}

// Función para manejar la opción "No"
function rechazarMayorEdad() {
  document.getElementById('popup').innerHTML = `
    <h2>Acceso Denegado</h2>
    <p>No puedes ingresar a esta página si no eres mayor de 18 años.</p>
  `;
  setTimeout(() => {
    window.location.href = "https://www.google.com"; // Cambia la URL si deseas
  }, 3000);
}

// Mostrar la ventana emergente al cargar la página
window.onload = function () {
  document.getElementById('popup').style.display = 'flex';
};



