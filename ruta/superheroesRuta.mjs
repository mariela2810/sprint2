import express from 'express'
import { obtenerSuperheroePorIdControlador,
    obtenerSuperheroesMayoresDe30Controlador,
    obtenerTodosLosSuperheroesControlador,
    buscarSuperheroePorAtributoControlador
 } from '../controlador/superheroesControlador.mjs'

 const ruta = express.Router()

 ruta.get('/heroes', obtenerTodosLosSuperheroesControlador)
 ruta.get('/heroes/id:', obtenerSuperheroePorIdControlador)
 ruta.get('/heroes/buscar/:atributo/:valor', buscarSuperheroePorAtributoControlador)
 ruta.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controlador)

 export default ruta