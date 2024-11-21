import SuperHeroeRepositorio from "../repositorio/SuperHeroeRepositorio.mjs";

export async function obtenerSuperheroePorId(id) {
    return await SuperHeroeRepositorio.obtenerPorId(id)
}
export async function obtenerTodosLosSuperheroes() {
    return await SuperHeroeRepositorio.obtenerTodos()
}
export async function buscarSuperheroePorAtributo(atributo,valor) {
    return await SuperHeroeRepositorio.buscarPorAtributo(atributo,valor)
}
export async function obtenerSuperheroesMayoresDe30() {
    return await SuperHeroeRepositorio.obtenerMayoresDe30()    
}