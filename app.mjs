import express from 'express'
import { connectDB } from './configuracion/conexion.mjs'
import superheroesRuta from './ruta/superheroesRuta.mjs'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json()) //convierte a formato json

connectDB() //conecta a mngodb

app.use('/api', superheroesRuta) //configura las rutas

app.use((req,res) => {
    res.status(404).send({mensaje:'Ruta no encontrada'})//en caso de no encontrar ruta
})

app.listen(PORT, () =>{
    console.log(`Servidor escuchando en el Puerto ${PORT}`)
})