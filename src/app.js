import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import reservasRouter from '../rutas/reservas.js';  // Asegúrate que la ruta y mayúsculas/minúsculas sean correctas

const app = express();

const __filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Motor de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Rutas
app.get('/reservas', (req, res) => {
  res.render('Reservas');  // Asegúrate que tengas la vista Reservas.ejs en views
});

app.use('/api/reservas', reservasRouter);  // Usamos prefijo /api/reservas para API REST

export default app;