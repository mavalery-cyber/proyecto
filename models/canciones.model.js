'use strict';

const mongoose = require('mongoose');

const schema_cancion = mongoose.Schema({
    nombre: { type: String, required: true },
    duracion: { type: Number, required: true },
    artista: { type: String, required: true },
    album: { type: String },
});

module.exports = mongoose.model('Cancion', schema_cancion, 'canciones');