'use strict';

const express = require('express');
const router = express.Router();
const Cancion = require('../models/canciones.model');


router.post('/registrar-cancion-nueva', (req, res) => {
    let cancion = new Cancion({
        nombre: req.body.nombre,
        duracion: req.body.duracion,
        artista: req.body.artista,
        album: req.body.album,
    });
    cancion.save((err, cancion_db) => {
        if (err) {
            res.json({
                err
            });
        } else {
            res.json({
                cancion_db
            });
        }
    });

});

router.get('/listar-canciones', (req, res) => {
    Cancion.find((err, listar_canciones) => {
        if (err) {
            res.json({
                msj: 'No se encontraron las canciones',
                err
            });
        } else {
            res.json({
                listar_canciones
            });
        }
    });
});

router.get('/buscar-canciones', (req, res) => {
    cancion.findOne({ _id: req.query._id }, (err, canciones) => {
        if (err) {
            res.json({
                err
            });
        } else {
            res.json({
                canciones
            });
        }
    });
});

router.put('/modificar-canciones', (req, res) => {
    canciones.updateOne({ _id: req.body._id }, {
        $set: {
            nombre: req.body.nombre,
            duracion: req.body.duracion,
            artista: req.body.artista,
            album: req.body.album,
        }
    }, (err, info) => {
        if (err) {
            res.json({
                msj: 'No se pudo modificar la canciones',
                err
            });
        } else {
            res.json({
                info
            });
        }
    });

});

module.exports = router;