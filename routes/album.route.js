'use strict';

const express = require('express');
const router = express.Router();
const Album = require('../models/album.model');


router.post('/registrar-album', (req, res) => {
    let album = new Album({
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        fecha_lanza: req.body.fecha_lanza,
    });
    album.save((err, album_db) => {
        if (err) {
            res.json({
                err
            });
        } else {
            res.json({
                album_db
            });
        }
    });

});

router.get('/listar-album', (req, res) => {
    Album.find((err, lista_album) => {
        if (err) {
            res.json({
                msj: 'No se encontraron los albumes',
                err
            });
        } else {
            res.json({
                lista_album
            });
        }
    });
});

router.get('/buscar-ejercicio', (req, res) => {
    Ejercicio.findOne({ _id: req.query._id }, (err, album) => {
        if (err) {
            res.json({
                err
            });
        } else {
            res.json({
                album
            });
        }
    });
});

router.put('/modificar-album', (req, res) => {
    Ejercicio.updateOne({ _id: req.body._id }, {
        $set: {
            codigo: req.body.codigo,
            nombre: req.body.nombre,
            fecha_lanza: req.body.fecha_lanza,
        }
    }, (err, info) => {
        if (err) {
            res.json({
                msj: 'No se pudo modificar el album',
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