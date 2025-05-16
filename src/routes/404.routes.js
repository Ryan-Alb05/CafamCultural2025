import { Router } from "express"

const router = Router()

router.get('/reservas', (req, res) => {
    res.render('reservas');
  });

router.get('/', (req, res)=>{
    res.render('index')
})

router.use((req, res)=>{
    res.status(400).render('404')
})