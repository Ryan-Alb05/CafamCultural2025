document.getElementById('reservaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const paquete = document.getElementById('paquete').value;
    const fecha = document.getElementById('fecha').value;

    document.getElementById('mensajeConfirmacion').textContent = `¡Gracias, ${nombre}! Tu reserva para el paquete "${paquete}" el día ${fecha} ha sido recibida.`;

    this.reset();
  });