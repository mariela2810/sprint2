import mongoose from 'mongoose';

export async function connectDB() {
    try{
        await mongoose.connect(
        'mongodb+srv://Grupo-03:grupo03@cursadanodejs.ls9ii.mongodb.net/Node-js')
        /*{useNewUrlParser:true, useUnifiedTopology:true})*/
        console.log('Conexion exitosa a Mongo DB')
    }
    catch(error){
        console.error('Error al conectar a Mongo DB', error)  
        process.exit(1)
    }
}