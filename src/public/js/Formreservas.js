const form = document.getElementById('reservaForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    nombre: form.nombre.value,
    email: form.email.value,
    paquete: form.paquete.value,
    fecha: form.fecha.value,
    comentarios: form.comentarios.value,
  };

  const response = await fetch('/formreservas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  document.getElementById('mensajeConfirmacion').textContent = result.message;
});