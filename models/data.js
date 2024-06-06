const {Schema, model} = require('mongoose');


const dataSchema = Schema({
    tittle:{
        type: String,
    },
    img:{
        type: String,
    },
    precio: {
        type: String,
    },
    date: {
        type: String,
    },
    voletas: {
        type: String,
    },
    numeros: {
        type: String,
        required: true 
    }
})

module.exports = model('Data',dataSchema);