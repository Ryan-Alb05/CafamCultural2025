import app from "./src/app.js"

const port = process.env.PORT || 3800


app.listen(port, ()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`)
})
