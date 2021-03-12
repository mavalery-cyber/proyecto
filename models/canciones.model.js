'use strict';

const mongoose = require('mongoose');

const schema_cancion = mongoose.Schema({
    codigo: { type: Number, required: true, unique: true },
    nombre_album: { type: String, required: true, unique: true },
    fecha_lanza: { type: String, required: true, unique: true },
    cant_canciones: { type: Number, required: true, unique: true },
    duracion: { type: Number, required: true, unique: true },
});

module.exports = mongoose.model('Cancion', schema_cancion, 'canciones');