'use strict';

const mongoose = require('mongoose');

const schema_album = mongoose.Schema({
    codigo: { type: String, required: true, unique: true },
    nombre: { type: String, required: true },
    fecha_lanza: { type: String, required: true },
    cant_canciones: { type: Number, required: true },
});

module.exports = mongoose.model('Album', schema_album, 'albumes');