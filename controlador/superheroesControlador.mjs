
import mongoose from "mongoose";

import { obtenerSuperheroePorId, obtenerTodosLosSuperheroes,
     obtenerSuperheroesMayoresDe30, buscarSuperheroePorAtributo} from "../servicio/superheroesServicio.mjs";

import {renderizarListaSuperheroes, renderizarSuperheroe} from "../vista/vistas.mjs";


export async function obtenerSuperheroesMayoresDe30Controlador(req,res) {
    /*res.status.send('entra en buscar por mayores 30')*/
    const superheroes = await obtenerSuperheroesMayoresDe30()
    res.send(renderizarListaSuperheroes(superheroes))
}

export async function obtenerSuperheroePorIdControlador(req,res) {
    /*res.status.send('entra en buscar por id')*/
    const {id} = req.params
    const superheroe = await obtenerSuperheroePorId(parseInt(id))
    console.log(`el id leido es: ${superheroe}`)
    if (superheroe){
        res.send(renderizarSuperheroe(superheroe))
    }else{
        res.status(404).send({mensaje:'Superheroe no encontrado'})
    }
}

export async function obtenerTodosLosSuperheroesControlador(req,res) {
    /*res.status.send('entra en buscar todos los heroes')*/
    const superheroes = await obtenerTodosLosSuperheroes()
    res.send(renderizarListaSuperheroes(superheroes))
}

export async function buscarSuperheroePorAtributoControlador(req,res) {
    /*res.status.send('entra en buscar por atributo')*/
    const {atributo,valor} = req.params
    const superheroes = await buscarSuperheroePorAtributo(atributo,valor)
    if(superheroes.length > 0){
        res.send(renderizarListaSuperheroes(superheroes))
    }else{
        res.status(404).send({mensaje:'Superheroes no encontrados'})
    }
}

