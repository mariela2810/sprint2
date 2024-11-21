import SuperHeroe from "../modelo/SuperHeroe.mjs";
import IRepositorio from "./IRepositorio.mjs";

class SuperHeroeRepositorio extends IRepositorio{
    async obtenerPorId(id){
        return await SuperHeroe.findById(id)
    }
    async obtenerTodos(){
        return await SuperHeroe.find({})
    }
    async buscarPorAtributo(atributo,valor){
        const consulta = {[atributo]:new RegExp(valor,'i')}
        return await SuperHeroe.find(consulta)
    }
    async obtenerMayoresDe30(){
        return await SuperHeroe.find({edad:{$gt30}, planetaOrigen:'Tierra',
                     poderes:{$size:{$gte:2}}})
    }
}

export default new SuperHeroeRepositorio()
