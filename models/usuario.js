const {Schema, model} = require('mongoose');


const usuarioSchema = Schema({

    estado:{
        type: Boolean,
        default: false
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    apellido: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio']
    },
    telefono: {
        type: String,
        required: [true, 'El telefono es obligatorio']
    },
    ciudad: {
        type: String,
        required: [true, 'La ciudad es obligatoria']
    },
    numeros: {
        type: String,
    },


})

module.exports = model('Usuario',usuarioSchema);