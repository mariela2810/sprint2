import express from 'express'
import { obtenerSuperheroePorIdControlador,
    obtenerSuperheroesMayoresDe30Controlador,
    obtenerTodosLosSuperheroesControlador,
    buscarSuperheroePorAtributoControlador
 } from '../controlador/superheroesControlador.mjs'

 const ruta = express.Router()



 ruta.get('/heroes', obtenerTodosLosSuperheroesControlador)
 ruta.get('/heroes/:id', obtenerSuperheroePorIdControlador)
 ruta.get('/heroes/buscar/:atributo/:valor', buscarSuperheroePorAtributoControlador)
 ruta.get('/heroes/edad/mayores-30', obtenerSuperheroesMayoresDe30Controlador)

 console.log(`la ruta obtenida es. ${ruta}`)

 export default ruta