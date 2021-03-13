'use strict';

const mongoose = require('mongoose');

const schema_usuario = mongoose.Schema({
    nombre: { type: String, required: true },
    fecha_nac: { type: Number, required: true },
    correo: { type: String, required: true },
    genero: { type: String, required: true },
    contrasena: { type: String, required: true },
    conf_contra: { type: String, required: true },
});

module.exports = mongoose.model('Cancion', schema_cancion, 'canciones');