'use strict';

const mongoose = require('mongoose');

const schema_artista = mongoose.Schema({
    nombre: { type: String, required: true, unique: true },
    disquera: { type: String, required: true },
    fecha_nac: { type: String, required: true },
});

module.exports = mongoose.model('Artista', schema_artista, 'artistas');