import { Router } from "express";
import db from "../public/js/db.js";

const router = Router();

// Página de formulario de reserva
router.get('/formreservas', (req, res) => {
  res.render('Formreservas'); // asegúrate de tener Formreservas.ejs en la carpeta views
});

// Ruta a la página de reservas, si también la usas
router.get('/reservas', (req, res) => {
  res.render('reservas');
});

// Ruta raíz (opcional, si tienes un index.ejs)
router.get('/', (req, res) => {
  res.render('index');
});

router.post('/formreservas', (req, res) => {
  const { nombre, email, paquete, fecha, comentarios } = req.body;

  const sql = `
    INSERT INTO reservas (nombre, email, paquete, fecha, comentarios)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(sql, [nombre, email, paquete, fecha, comentarios], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Error al guardar la reserva');
    }
    res.status(201).send('Reserva creada correctamente');
  });
});

// Ruta 404 para cualquier otra
router.use((req, res) => {
  res.status(404).render('404');
});

export default router;
  