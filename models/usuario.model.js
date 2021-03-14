'use strict';

const mongoose = require('mongoose');



const schema_usuario = mongoose.Schema({
    nombre: { type: String, required: true },
    fecha_nac: { type: String, required: true },
    correo: { type: String, required: true },
    genero: { type: String, required: true },
    contrasena: { type: String, required: true },
    tipo: { type: String, required: true },
});

module.exports = mongoose.model('Usuario', schema_usuario, 'usuario');