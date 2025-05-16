import { Router } from "express";

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

// Ruta 404 para cualquier otra
router.use((req, res) => {
  res.status(404).render('404');
});

export default router;
  