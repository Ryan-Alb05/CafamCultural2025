const form = document.getElementById('reservaForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    nombre_completo: form.nombre.value,
    correo_electronico: form.email.value,
    paquete_turistico: form.paquete.value,
    fecha_reserva: form.fecha.value,
    comentarios: form.comentarios.value,
  };

  const response = await fetch('/api/reservas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  document.getElementById('mensajeConfirmacion').textContent = result.message;
});