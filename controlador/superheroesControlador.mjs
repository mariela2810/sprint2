import { obtenerSuperheroePorId, obtenerTodosLosSuperheroes,
     obtenerSuperheroesMayoresDe30, buscarSuperheroePorAtributo} from "../servicio/superheroesServicio.mjs";


export async function obtenerSuperheroePorIdControlador(req,res) {
    const {id} = req.params
    const superheroe = await obtenerSuperheroePorId(id)
    if (superheroe){
        res.send(renderizarSuperheroe(superheroe))
    }else{
        res.status(404).send({mensaje:'Superheroe no encontrado'})
    }
}
export async function obtenerTodosLosSuperheroesControlador(req,res) {
    const superheroes = await obtenerTodosLosSuperheroes()
    res.send(renderizarListaSuperheroes(superheroes))
}
export async function buscarSuperheroePorAtributoControlador(req,res) {
    const {atributo,valor} = req.params
    const superheroes = await buscarSuperheroePorAtributo(atributo,valor)
    if(superheroes.length > 0){
        res.send(renderizarListaSuperheroes(superheroes))
    }else{
        res.status(404).send({mensaje:'Superheroes no encontrados'})
    }
}
export async function obtenerSuperheroesMayoresDe30Controlador(req,res) {
    const superheroes = await obtenerSuperheroesMayoresDe30()
    res.send(renderizarListaSuperheroes(superheroes))
}