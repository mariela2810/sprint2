import SuperHeroe from "../modelo/SuperHeroe.mjs";
import IRepositorio from "./IRepositorio.mjs";


class SuperHeroeRepositorio extends IRepositorio{

    async obtenerMayoresDe30(){

      return await SuperHeroe.find({edad:{$gt:30}, planetaOrigen:'Tierra',
                                    $expr:{$gte:[{$size:"$poderes"}, 2]}
                                  })
    }

    async obtenerPorId(id){
        return await SuperHeroe.findOne({id:id})
    }

    async obtenerTodos(){
        return await SuperHeroe.find({})
    }

    async buscarPorAtributo(atributo,valor){
        const consulta = {[atributo]:new RegExp(valor,'i')}
        return await SuperHeroe.find(consulta)
    }
}

export default new SuperHeroeRepositorio()
