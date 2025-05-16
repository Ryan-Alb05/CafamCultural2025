import { Router } from 'express';
import db from '../db.js';  // Ajusta si tu archivo de conexión a BD está en otro lugar

const router = Router();

router.post('/', (req, res) => {
  const { nombre_completo, correo_electronico, paquete_turistico, fecha_reserva, comentarios } = req.body;

  const sql = `
    INSERT INTO reservas (nombre_completo, correo_electronico, paquete_turistico, fecha_reserva, comentarios)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(sql, [nombre_completo, correo_electronico, paquete_turistico, fecha_reserva, comentarios], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Error al guardar la reserva');
    }
    res.status(201).send('Reserva creada correctamente');
  });
});

export default router;